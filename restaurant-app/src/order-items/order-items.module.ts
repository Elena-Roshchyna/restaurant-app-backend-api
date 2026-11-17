import { Module } from '@nestjs/common';
import { OrderItemsController } from './order-items.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem } from './order-item.entity.js';

@Module({
    controllers: [OrderItemsController],
    imports: [TypeOrmModule.forFeature([OrderItem])],
})
export class OrderItemsModule {}

