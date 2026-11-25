import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, Max, Min } from 'class-validator';

export class OrderItemSaveDto {
  @ApiProperty({ example: 1, description: 'Order id' })
  @IsInt()
  @IsPositive()
  orderId: number;

  @ApiProperty({ example: 2, description: 'Dish id' })
  @IsInt()
  @IsPositive()
  dishId: number;

  @ApiProperty({ example: 2 })
  @IsInt()
  @Min(1)
  @Max(50)
  quantity: number;
}


