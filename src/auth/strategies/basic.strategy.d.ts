import { BasicStrategy as Strategy } from 'passport-http';
import { AuthService } from '../auth.service';
declare const BasicStrategy_base: new (...args: any[]) => Strategy;
export declare class BasicStrategy extends BasicStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(username: string, pass: string): Promise<any>;
}
export {};
