import { Cart } from './cart.entity';
export declare class CartItem {
    id: number;
    cart: Cart;
    productId: string;
    count: number;
}
