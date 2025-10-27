import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from '../models/cart.entity';
import { CartItem } from '../models/cart-item.entity';
import { CartStatuses } from '../models';
import { PutCartPayload } from '../../order/type';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepo: Repository<Cart>,
    @InjectRepository(CartItem)
    private itemRepo: Repository<CartItem>,
  ) {}

  async findByUserId(userId: string): Promise<Cart | null> {
    return this.cartRepo.findOne({
      where: { userId: userId, status: CartStatuses.OPEN },
      relations: ['items'],
    });
  }

  async createByUserId(userId: string): Promise<Cart> {
    const cart = this.cartRepo.create({
      userId,
      status: CartStatuses.OPEN,
      items: [],
    });

    return this.cartRepo.save(cart);
  }

  async findOrCreateByUserId(userId: string): Promise<Cart> {
    const existing = await this.findByUserId(userId);
    return existing ?? this.createByUserId(userId);
  }

  async updateByUserId(userId: string, payload: PutCartPayload): Promise<Cart> {
    const cart = await this.findOrCreateByUserId(userId);

    let item = await this.itemRepo.findOne({
      where: {
        cart: { id: cart.id },
        productId: payload.product.id,
      },
    });

    if (!item && payload.count > 0) {
      item = this.itemRepo.create({
        cart,
        productId: payload.product.id,
        count: payload.count,
      });
      await this.itemRepo.save(item);
    } else if (item && payload.count === 0) {
      await this.itemRepo.remove(item);
    } else if (item) {
      item.count = payload.count;
      await this.itemRepo.save(item);
    }

    await this.cartRepo.save(cart);

    return this.findOrCreateByUserId(userId);
  }

  async removeByUserId(userId: string): Promise<void> {
    const cart = await this.findByUserId(userId);
    if (cart) await this.cartRepo.remove(cart);
  }
}
