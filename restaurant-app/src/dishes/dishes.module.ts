import { Module } from '@nestjs/common';
import { DishesController } from './dishes.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './dish.entity.js';

@Module({
    controllers: [DishesController],
    imports: [TypeOrmModule.forFeature([Dish])],
})
export class DishesModule {}

