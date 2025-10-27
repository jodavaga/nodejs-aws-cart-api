import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDbCredentials } from './main.lambda';
import { Cart } from './cart/models/cart.entity';
import { CartItem } from './cart/models/cart-item.entity';

@Module({
  imports: [
    AuthModule,
    CartModule,
    OrderModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const creds = await getDbCredentials();
        return {
          type: 'postgres',
          host: creds.host,
          port: creds.port,
          username: creds.username,
          password: creds.password,
          database: creds.database,
          entities: [Cart, CartItem],
          synchronize: true,
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
