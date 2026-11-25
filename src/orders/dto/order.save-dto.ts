import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, Validate } from 'class-validator';
import { TableNumberValidator } from '../validation/table-number.validator.js';

export class OrderSaveDto {
  @ApiProperty({ example: 1, description: 'Guest id' })
  @IsInt()
  @IsPositive()
  guestId: number;

  @ApiProperty({ example: 4 })
  @Validate(TableNumberValidator)
  tableNumber: number;
}

