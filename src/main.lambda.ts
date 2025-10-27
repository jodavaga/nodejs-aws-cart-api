import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from '@aws-sdk/client-secrets-manager';
import { AppModule } from './app.module';
import { Handler, Context, Callback } from 'aws-lambda';
import serverlessExpress from '@vendia/serverless-express';

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
  const arn = process.env.DB_SECRET_ARN!;

  const secretData = await client.send(
    new GetSecretValueCommand({ SecretId: arn }),
  );

  const secret = JSON.parse(secretData.SecretString!);

  return {
    username: secret.username,
    password: secret.password,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 5432),
    database: 'cartdb',
  };
}

export const handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrapServer());
  return server(event, context, callback);
};
