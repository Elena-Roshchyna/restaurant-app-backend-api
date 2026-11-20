import { ApiProperty } from '@nestjs/swagger';
import { GuestDto } from '../../guests/dto/guest.dto.js';
import { OrderStatus } from '../enums/order-status.enum.js';

export class OrderDto {
  @ApiProperty()
  id: number;

  @ApiProperty({ type: () => GuestDto })
  guest: GuestDto;

  @ApiProperty()
  tableNumber: number;

  @ApiProperty({ enum: OrderStatus })
  status: OrderStatus;

  @ApiProperty()
  createdAt: Date;
}


