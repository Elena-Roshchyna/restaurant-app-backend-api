import { Injectable, NotFoundException } from '@nestjs/common';
import { OrdersRepository } from './orders.repository.js';
import { OrdersMapper } from './dto/orders.mapper.js';
import { GuestsService } from '../guests/guests.service.js';
import { Order } from './order.entity.js';
import { OrderStatus } from './enums/order-status.enum.js';
import { OrderDto } from './dto/order.dto.js';
import { OrderSaveDto } from './dto/order.save-dto.js';

@Injectable()
export class OrdersService {
  constructor(
    private readonly repository: OrdersRepository,
    private readonly mapper: OrdersMapper,
    private readonly guestsService: GuestsService,
  ) {}

  async findAll(): Promise<OrderDto[]> {
    const orders: Order[] = await this.repository.findAll();
    return this.mapper.mapEntityListToDtoList(orders);
  }


  async findEntityById(id: number): Promise<Order> {
    const order: Order | null = await this.repository.findById(id);
    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }
    return order;
  }

  async findById(id: number): Promise<OrderDto> {
    const order: Order = await this.findEntityById(id);
    return this.mapper.mapEntityToDto(order);
  }

  async create(saveDto: OrderSaveDto): Promise<OrderDto> {
    const entity: Order = this.mapper.mapDtoToEntity(saveDto);
    entity.guest = await this.guestsService.findEntityById(saveDto.guestId);
    entity.status = OrderStatus.NEW; // новый заказ всегда начинается с NEW
    const saved: Order = await this.repository.save(entity);
    return this.mapper.mapEntityToDto(saved);
  }
}


