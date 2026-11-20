import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DishesService } from './dishes.service.js';
import { DishDto } from './dto/dish.dto.js';
import { DishSaveDto } from './dto/dish.save-dto.js';

@ApiTags('dishes')
@Controller('dishes')
export class DishesController {
  constructor(private readonly service: DishesService) {}

  @Get()
  async getAll(): Promise<DishDto[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<DishDto> {
    return await this.service.findById(id);
  }

  @Post()
  async create(@Body() saveDto: DishSaveDto): Promise<DishDto> {
    return await this.service.create(saveDto);
  }
}

