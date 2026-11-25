import { ApiProperty } from '@nestjs/swagger';
import { DishCategory } from '../enums/dish-category.enum.js';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class DishSaveDto {
  @ApiProperty({ example: 'Margherita pizza' })
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  name: string;

  @ApiProperty({ example: 'Tomato, mozzarella, basil' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  description: string;

  @ApiProperty({ example: 12.5 })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  price: number;

  @ApiProperty({ enum: DishCategory, example: DishCategory.MAIN })
  @IsEnum(DishCategory)
  category: DishCategory;
}


