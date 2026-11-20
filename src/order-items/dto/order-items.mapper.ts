import { Injectable } from '@nestjs/common';
import { OrdersMapper } from '../../orders/dto/orders.mapper.js';
import { DishesMapper } from '../../dishes/dto/dishes.mapper.js';
import { OrderItem } from '../order-item.entity.js';
import { OrderItemSaveDto } from './order-item.save-dto.js';
import { OrderItemDto } from './order-item.dto.js';

@Injectable()
export class OrderItemsMapper {
  constructor(
    private readonly ordersMapper: OrdersMapper,
    private readonly dishesMapper: DishesMapper,
  ) {}

  mapDtoToEntity(saveDto: OrderItemSaveDto): OrderItem {
    const entity: OrderItem = new OrderItem();
    entity.quantity = saveDto.quantity;
    return entity;
  }

  mapEntityToDto(entity: OrderItem): OrderItemDto {
    const dto: OrderItemDto = new OrderItemDto();
    dto.id = entity.id;
    dto.order = this.ordersMapper.mapEntityToDto(entity.order);
    dto.dish = this.dishesMapper.mapEntityToDto(entity.dish);
    dto.quantity = entity.quantity;
    dto.unitPrice = Number(entity.unitPrice); // PostgreSQL отдаёт decimal строкой
    return dto;
  }

  mapEntityListToDtoList(entityList: OrderItem[]): OrderItemDto[] {
    if (!entityList) {
      return [];
    }
    return entityList.map((item: OrderItem): OrderItemDto =>
      this.mapEntityToDto(item),
    );
  }
}


