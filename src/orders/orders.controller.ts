import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrdersService } from './orders.service.js';
import { OrderDto } from './dto/order.dto.js';
import { OrderSaveDto } from './dto/order.save-dto.js';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  @Get()
  async getAll(): Promise<OrderDto[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<OrderDto> {
    return await this.service.findById(id);
  }

  @Post()
  async create(@Body() saveDto: OrderSaveDto): Promise<OrderDto> {
    return await this.service.create(saveDto);
  }
}


