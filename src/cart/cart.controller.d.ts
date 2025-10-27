import { Order, OrderService } from '../order';
import { AppRequest } from '../shared';
import { CartService } from './services';
import { CreateOrderDto, PutCartPayload } from '../order/type';
import { CartItem } from './models/cart-item.entity';
export declare class CartController {
    private cartService;
    private orderService;
    constructor(cartService: CartService, orderService: OrderService);
    findUserCart(req: AppRequest): Promise<CartItem[]>;
    updateUserCart(req: AppRequest, body: PutCartPayload): Promise<CartItem[]>;
    clearUserCart(req: AppRequest): void;
    checkout(req: AppRequest, body: CreateOrderDto): Promise<{
        order: Order;
    }>;
    getOrder(): Order[];
}
