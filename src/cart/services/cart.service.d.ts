import { Cart } from '../models';
import { PutCartPayload } from '../../order/type';
export declare class CartService {
    private userCarts;
    findByUserId(userId: string): Cart;
    createByUserId(user_id: string): Cart;
    findOrCreateByUserId(userId: string): Cart;
    updateByUserId(userId: string, payload: PutCartPayload): Cart;
    removeByUserId(userId: string): void;
}
