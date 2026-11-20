import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './dish.entity.js';
import { DishesController } from './dishes.controller.js';
import { DishesService } from './dishes.service.js';
import { DishesRepository } from './dishes.repository.js';
import { DishesMapper } from './dto/dishes.mapper.js';

@Module({
  imports: [TypeOrmModule.forFeature([Dish])],
  controllers: [DishesController],
  providers: [DishesService, DishesRepository, DishesMapper],
  exports: [DishesService, DishesMapper],
})
export class DishesModule {}


