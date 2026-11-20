import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity.js';
import { OrdersController } from './orders.controller.js';
import { OrdersService } from './orders.service.js';
import { OrdersRepository } from './orders.repository.js';
import { OrdersMapper } from './dto/orders.mapper.js';
import { GuestsModule } from '../guests/guests.module.js';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), GuestsModule],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository, OrdersMapper],
  exports: [OrdersService, OrdersMapper],
})
export class OrdersModule {}


