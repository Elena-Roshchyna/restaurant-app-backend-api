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
import { Order } from './order.entity.js';
import { OrderStatus } from './enums/order-status.enum.js';

@Controller('orders')
export class OrdersController {
    @Post()
    create(@Body() order: Order): Order {
        console.log('Saved order: ', order);
        order.id = 5;
        return order;
    }

    @Get()
    getAll(): Order[] {
        const order1: Order = new Order();
        order1.tableNumber = 1;
        order1.status = OrderStatus.NEW;
        const order2: Order = new Order();
        order2.tableNumber = 2;
        order2.status = OrderStatus.COOKING;

        return [order1, order2];
    }

    @Get(':id')
    getById(@Param('id', ParseIntPipe) id: number): Order {
        console.log(id);
        const order: Order = new Order();
        order.tableNumber = 3;
        order.status = OrderStatus.SERVED;
        return order;
    }

    @Patch(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    update(@Param('id', ParseIntPipe) id: number, @Body() order: Order): void {
        console.log(id);
        console.log(order);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteById(@Param('id', ParseIntPipe) id: number): void {
        console.log(id);
    }

    @Patch(':orderId/set-guest/:guestId')
    @HttpCode(HttpStatus.NO_CONTENT)
    setGuest(
        @Param('orderId', ParseIntPipe) orderId: number,
        @Param('guestId', ParseIntPipe) guestId: number,
    ): void {
        console.log(orderId);
        console.log(guestId);
    }
}

