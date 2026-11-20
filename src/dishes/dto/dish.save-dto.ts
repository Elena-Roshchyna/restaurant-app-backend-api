import { ApiProperty } from '@nestjs/swagger';
import { DishCategory } from '../enums/dish-category.enum.js';

export class DishSaveDto {
  @ApiProperty({ example: 'Margherita pizza' })
  name: string;

  @ApiProperty({ example: 'Tomato, mozzarella, basil' })
  description: string;

  @ApiProperty({ example: 12.5 })
  price: number;

  @ApiProperty({ enum: DishCategory, example: DishCategory.MAIN })
  category: DishCategory;
}


