import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Dish } from '../dishes/dish.entity.js';
import { Order } from '../orders/order.entity.js';

@Entity('order_items')
export class OrderItem {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @ManyToOne((): typeof Order => Order, { nullable: false })
    @JoinColumn({ name: 'order_id' })
    order: Order;

    @ManyToOne((): typeof Dish => Dish, { nullable: false })
    @JoinColumn({ name: 'dish_id' })
    dish: Dish;

    @Column({ name: 'quantity', nullable: false, unique: false })
    quantity: number;

    @Column({
        name: 'unit_price',
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: false,
        unique: false,
    })
    unitPrice: number;
}
