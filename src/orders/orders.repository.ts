import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity.js';
import { OrderStatus } from './enums/order-status.enum.js';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersRepository {
    constructor(
        @InjectRepository(Order)
        private readonly repository: Repository<Order>,
    ) {}

    async save(order: Order): Promise<Order> {
        return this.repository.save(order);
    }

    async findAllByStatus(status: OrderStatus): Promise<Order[]> {
        return this.repository.findBy({ status });
    }

    async findById(id: number): Promise<Order | null> {
        return this.repository.findOneBy({ id });
    }

    async deleteById(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
