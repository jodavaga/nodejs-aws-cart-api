import { CartStatuses } from '.';
import { CartItem } from './cart-item.entity';
export declare class Cart {
    id: number;
    userId: string;
    status: CartStatuses;
    items: CartItem[];
}
