import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderItemsService } from './order-items.service.js';
import { OrderItemDto } from './dto/order-item.dto.js';
import { OrderItemSaveDto } from './dto/order-item.save-dto.js';

@ApiTags('order-items')
@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly service: OrderItemsService) {}

  @Get()
  async getAll(): Promise<OrderItemDto[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<OrderItemDto> {
    return await this.service.findById(id);
  }

  @Post()
  async create(@Body() saveDto: OrderItemSaveDto): Promise<OrderItemDto> {
    return await this.service.create(saveDto);
  }
}


