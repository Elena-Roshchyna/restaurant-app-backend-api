import { Module } from '@nestjs/common';
import { GuestsModule } from './guests/guests.module.js';
import { DishesModule } from './dishes/dishes.module.js';
import { OrdersModule } from './orders/orders.module.js';
import { OrderItemsModule } from './order-items/order-items.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'restaurant_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    GuestsModule,
    DishesModule,
    OrdersModule,
    OrderItemsModule,
  ],
})
export class AppModule {}

