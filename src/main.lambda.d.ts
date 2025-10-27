import 'reflect-metadata';
import { Context, Callback } from 'aws-lambda';
import { Cart } from './cart/models/cart.entity';
import { CartItem } from './cart/models/cart-item.entity';
export declare function getDbCredentials(): Promise<{
    type: string;
    host: string;
    port: number;
    username: any;
    password: any;
    database: string;
    entities: (typeof CartItem | typeof Cart)[];
    synchronize: boolean;
    ssl: boolean;
}>;
export declare const handler: (event: any, context: Context, callback: Callback) => Promise<any>;
