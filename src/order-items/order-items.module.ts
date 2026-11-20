import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem } from './order-item.entity.js';
import { OrderItemsController } from './order-items.controller.js';
import { OrderItemsService } from './order-items.service.js';
import { OrderItemsRepository } from './order-items.repository.js';
import { OrderItemsMapper } from './dto/order-items.mapper.js';
import { OrdersModule } from '../orders/orders.module.js';
import { DishesModule } from '../dishes/dishes.module.js';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItem]), OrdersModule, DishesModule],
  controllers: [OrderItemsController],
  providers: [OrderItemsService, OrderItemsRepository, OrderItemsMapper],
  exports: [OrderItemsService, OrderItemsMapper],
})
export class OrderItemsModule {}


