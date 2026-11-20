import { Injectable, NotFoundException } from '@nestjs/common';
import { OrderItemsRepository } from './order-items.repository.js';
import { OrderItemsMapper } from './dto/order-items.mapper.js';
import { OrdersService } from '../orders/orders.service.js';
import { DishesService } from '../dishes/dishes.service.js';
import { OrderItem } from './order-item.entity.js';
import { OrderItemDto } from './dto/order-item.dto.js';
import { OrderItemSaveDto } from './dto/order-item.save-dto.js';

@Injectable()
export class OrderItemsService {
  constructor(
    private readonly repository: OrderItemsRepository,
    private readonly mapper: OrderItemsMapper,
    private readonly ordersService: OrdersService,
    private readonly dishesService: DishesService,
  ) {}

  async findAll(): Promise<OrderItemDto[]> {
    const items: OrderItem[] = await this.repository.findAll();
    return this.mapper.mapEntityListToDtoList(items);
  }

  async findById(id: number): Promise<OrderItemDto> {
    const item: OrderItem | null = await this.repository.findById(id);
    if (!item) {
      throw new NotFoundException(`Order item with id ${id} not found`);
    }
    return this.mapper.mapEntityToDto(item);
  }

  async create(saveDto: OrderItemSaveDto): Promise<OrderItemDto> {
    const entity: OrderItem = this.mapper.mapDtoToEntity(saveDto);
    entity.order = await this.ordersService.findEntityById(saveDto.orderId);
    entity.dish = await this.dishesService.findEntityById(saveDto.dishId);
    entity.unitPrice = entity.dish.price; // цена блюда на момент заказа
    const saved: OrderItem = await this.repository.save(entity);
    return this.mapper.mapEntityToDto(saved);
  }
}


