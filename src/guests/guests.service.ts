import { Injectable, NotFoundException } from '@nestjs/common';
import { GuestsRepository } from './guests.repository.js';
import { GuestsMapper } from './dto/guests.mapper.js';
import { Guest } from './guest.entity.js';
import { GuestDto } from './dto/guest.dto.js';
import { GuestSaveDto } from './dto/guest.save-dto.js';

@Injectable()
export class GuestsService {
  constructor(
    private readonly repository: GuestsRepository,
    private readonly mapper: GuestsMapper,
  ) {}

  async findAll(): Promise<GuestDto[]> {
    const guests: Guest[] = await this.repository.findAll();
    return this.mapper.mapEntityListToDtoList(guests);
  }


  async findEntityById(id: number): Promise<Guest> {
    const guest: Guest | null = await this.repository.findById(id);
    if (!guest) {
      throw new NotFoundException(`Guest with id ${id} not found`);
    }
    return guest;
  }

  async findById(id: number): Promise<GuestDto> {
    const guest: Guest = await this.findEntityById(id);
    return this.mapper.mapEntityToDto(guest);
  }

  async create(saveDto: GuestSaveDto): Promise<GuestDto> {
    const entity: Guest = this.mapper.mapDtoToEntity(saveDto);
    const saved: Guest = await this.repository.save(entity);
    return this.mapper.mapEntityToDto(saved);
  }
}

