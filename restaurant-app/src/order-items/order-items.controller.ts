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
import { OrderItem } from './order-item.entity.js';

@Controller('order-items')
export class OrderItemsController {
    @Post()
    create(@Body() item: OrderItem): OrderItem {
        console.log('Saved order item: ', item);
        item.id = 5;
        return item;
    }

    @Get()
    getAll(): OrderItem[] {
        const item1: OrderItem = new OrderItem();
        item1.quantity = 2;
        const item2: OrderItem = new OrderItem();
        item2.quantity = 1;

        return [item1, item2];
    }

    @Get(':id')
    getById(@Param('id', ParseIntPipe) id: number): OrderItem {
        console.log(id);
        const item: OrderItem = new OrderItem();
        item.quantity = 3;
        return item;
    }

    @Patch(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() item: OrderItem,
    ): void {
        console.log(id);
        console.log(item);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteById(@Param('id', ParseIntPipe) id: number): void {
        console.log(id);
    }

    @Patch(':itemId/set-dish/:dishId')
    @HttpCode(HttpStatus.NO_CONTENT)
    setDish(
        @Param('itemId', ParseIntPipe) itemId: number,
        @Param('dishId', ParseIntPipe) dishId: number,
    ): void {
        console.log(itemId);
        console.log(dishId);
    }
}

