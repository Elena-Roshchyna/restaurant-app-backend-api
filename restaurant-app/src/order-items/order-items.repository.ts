import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItem } from './order-item.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class OrderItemsRepository {
    constructor(
        @InjectRepository(OrderItem)
        private readonly repository: Repository<OrderItem>,
    ) {}

    async save(item: OrderItem): Promise<OrderItem> {
        return this.repository.save(item);
    }

    async findByOrderId(orderId: number): Promise<OrderItem[]> {
        return this.repository.findBy({ order: { id: orderId } });
    }

    async findById(id: number): Promise<OrderItem | null> {
        return this.repository.findOneBy({ id });
    }

    async deleteById(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}

