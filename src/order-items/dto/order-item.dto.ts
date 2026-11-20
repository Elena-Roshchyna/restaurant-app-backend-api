import { ApiProperty } from '@nestjs/swagger';
import { OrderDto } from '../../orders/dto/order.dto.js';
import { DishDto } from '../../dishes/dto/dish.dto.js';

export class OrderItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty({ type: () => OrderDto })
  order: OrderDto;

  @ApiProperty({ type: () => DishDto })
  dish: DishDto;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  unitPrice: number;
}


