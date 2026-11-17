import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity.js';

@Module({
    controllers: [OrdersController],
    imports: [TypeOrmModule.forFeature([Order])],
})
export class OrdersModule {}

