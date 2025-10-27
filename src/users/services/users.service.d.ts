import { User } from '../models';
export declare class UsersService {
    private readonly users;
    constructor();
    findOne(name: string): User | undefined;
    createOne({ name, password }: User): User;
}
