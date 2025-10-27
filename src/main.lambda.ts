import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from '@aws-sdk/client-secrets-manager';
import { AppModule } from './app.module';
import { Handler, Context, Callback } from 'aws-lambda';
import serverlessExpress from '@vendia/serverless-express';
import { Cart } from './cart/models/cart.entity';
import { CartItem } from './cart/models/cart-item.entity';

let server: Handler;

async function bootstrapServer() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export async function getDbCredentials() {
  const client = new SecretsManagerClient({});
  const command = new GetSecretValueCommand({
    SecretId: process.env.DB_SECRET_ARN!,
  });
  const response = await client.send(command);

  const creds = JSON.parse(response.SecretString!);

  const config = {
    type: 'postgres',
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT || 5432),
    username: creds.username,
    password: creds.password,
    database: process.env.DB_NAME || 'cartdb',
    entities: [Cart, CartItem],
    synchronize: true,
    ssl: false,
  };

  console.log('DB CONFIG', {
    host: config.host,
    port: config.port,
    username: config.username,
    database: config.database,
    ssl: config.ssl,
  });

  return config;
}

export const handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrapServer());
  return server(event, context, callback);
};
