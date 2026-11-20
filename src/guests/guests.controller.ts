import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GuestsService } from './guests.service.js';
import { GuestDto } from './dto/guest.dto.js';
import { GuestSaveDto } from './dto/guest.save-dto.js';

@ApiTags('guests')
@Controller('guests')
export class GuestsController {
  constructor(private readonly service: GuestsService) {}

  @Get()
  async getAll(): Promise<GuestDto[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<GuestDto> {
    return await this.service.findById(id);
  }

  @Post()
  async create(@Body() saveDto: GuestSaveDto): Promise<GuestDto> {
    return await this.service.create(saveDto);
  }
}


