import { ApiProperty } from '@nestjs/swagger';

export class OrderSaveDto {
  @ApiProperty({ example: 1, description: 'Guest id' })
  guestId: number;

  @ApiProperty({ example: 4 })
  tableNumber: number;
}

