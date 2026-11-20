import { ApiProperty } from '@nestjs/swagger';
import { DishCategory } from '../enums/dish-category.enum.js';

export class DishDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty({ enum: DishCategory })
  category: DishCategory;

  @ApiProperty()
  available: boolean;
}

