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

  async findAll(): Promise<Order[]> {
    return this.repository.find({ relations: { guest: true } });
  }

  async findAllByStatus(status: OrderStatus): Promise<Order[]> {
    return this.repository.findBy({ status });
  }

  async findById(id: number): Promise<Order | null> {
    return this.repository.findOne({
      where: { id },
      relations: { guest: true },
    });
  }


  async deleteById(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
