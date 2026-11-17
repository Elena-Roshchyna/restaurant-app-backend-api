import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    HttpCode,
    HttpStatus,
    Delete,
} from '@nestjs/common';
import { Dish } from './dish.entity.js';
import { DishCategory } from './enums/dish-category.enum.js';

@Controller('dishes')
export class DishesController {
    // Здесь (в методах), будет обращение к сервису,
    // но пока пишем тренировочный код
    @Post()
    create(@Body() dish: Dish): Dish {
        console.log('Saved dish: ', dish);
        dish.id = 5;
        return dish;
    }

    @Get()
    getAll(): Dish[] {
        const dish1: Dish = new Dish();
        dish1.name = 'Caesar salad';
        dish1.category = DishCategory.STARTER;
        const dish2: Dish = new Dish();
        dish2.name = 'Tiramisu';
        dish2.category = DishCategory.DESSERT;

        return [dish1, dish2];
    }

    @Get(':id')
    getById(@Param('id', ParseIntPipe) id: number): Dish {
        console.log(id);
        const dish: Dish = new Dish();
        dish.name = 'Margherita pizza';
        dish.category = DishCategory.MAIN;
        return dish;
    }

    @Patch(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    update(@Param('id', ParseIntPipe) id: number, @Body() dish: Dish): void {
        console.log(id);
        console.log(dish);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteById(@Param('id', ParseIntPipe) id: number): void {
        console.log(id);
    }
}

