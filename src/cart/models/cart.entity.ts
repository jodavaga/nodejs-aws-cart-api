import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CartStatuses } from '.';
import { CartItem } from './cart-item.entity';

@Entity({ name: 'carts' })
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  userId: string;

  @Column({
    type: 'enum',
    enum: CartStatuses,
    default: CartStatuses.OPEN,
  })
  status: CartStatuses;

  @OneToMany(() => CartItem, (item) => item.cart)
  items: CartItem[];
}
