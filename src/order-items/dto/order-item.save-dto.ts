import { ApiProperty } from '@nestjs/swagger';

export class OrderItemSaveDto {
  @ApiProperty({ example: 1, description: 'Order id' })
  orderId: number;

  @ApiProperty({ example: 2, description: 'Dish id' })
  dishId: number;

  @ApiProperty({ example: 2 })
  quantity: number;
}


