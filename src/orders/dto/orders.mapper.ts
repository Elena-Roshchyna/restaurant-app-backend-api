import { Injectable } from '@nestjs/common';
import { GuestsMapper } from '../../guests/dto/guests.mapper.js';
import { Order } from '../order.entity.js';
import { OrderSaveDto } from './order.save-dto.js';
import { OrderDto } from './order.dto.js';

@Injectable()
export class OrdersMapper {
  constructor(private readonly guestsMapper: GuestsMapper) {}

  mapDtoToEntity(saveDto: OrderSaveDto): Order {
    const entity: Order = new Order();
    entity.tableNumber = saveDto.tableNumber;
    return entity;
  }

  mapEntityToDto(entity: Order): OrderDto {
    const dto: OrderDto = new OrderDto();
    dto.id = entity.id;
    dto.guest = this.guestsMapper.mapEntityToDto(entity.guest);
    dto.tableNumber = entity.tableNumber;
    dto.status = entity.status;
    dto.createdAt = entity.createdAt;
    return dto;
  }

  mapEntityListToDtoList(entityList: Order[]): OrderDto[] {
    if (!entityList) {
      return [];
    }
    return entityList.map((order: Order): OrderDto =>
      this.mapEntityToDto(order),
    );
  }
}

