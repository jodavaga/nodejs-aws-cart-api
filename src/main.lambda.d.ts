import 'reflect-metadata';
import { Context, Callback } from 'aws-lambda';
export declare function getDbCredentials(): Promise<{
    username: any;
    password: any;
    host: string | undefined;
    port: number;
    database: string;
}>;
export declare const handler: (event: any, context: Context, callback: Callback) => Promise<any>;
