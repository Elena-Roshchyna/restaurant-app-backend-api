import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Guest } from '../guests/guest.entity.js';
import { OrderStatus } from './enums/order-status.enum.js';

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @ManyToOne((): typeof Guest => Guest, { nullable: false })
    @JoinColumn({ name: 'guest_id' })
    guest: Guest;

    @Column({ name: 'table_number', nullable: false, unique: false })
    tableNumber: number;

    @Column({
        name: 'status',
        type: 'enum',
        enum: OrderStatus,
        nullable: false,
        unique: false,
        default: OrderStatus.NEW,
    })
    status: OrderStatus;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
