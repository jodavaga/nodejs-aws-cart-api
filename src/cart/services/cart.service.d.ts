import { Repository } from 'typeorm';
import { Cart } from '../models/cart.entity';
import { CartItem } from '../models/cart-item.entity';
import { PutCartPayload } from '../../order/type';
export declare class CartService {
    private cartRepo;
    private itemRepo;
    constructor(cartRepo: Repository<Cart>, itemRepo: Repository<CartItem>);
    findByUserId(userId: string): Promise<Cart | null>;
    createByUserId(userId: string): Promise<Cart>;
    findOrCreateByUserId(userId: string): Promise<Cart>;
    updateByUserId(userId: string, payload: PutCartPayload): Promise<Cart>;
    removeByUserId(userId: string): Promise<void>;
}
