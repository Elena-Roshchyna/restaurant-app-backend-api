import { Injectable, NotFoundException } from '@nestjs/common';
import { DishesRepository } from './dishes.repository.js';
import { DishesMapper } from './dto/dishes.mapper.js';
import { Dish } from './dish.entity.js';
import { DishDto } from './dto/dish.dto.js';
import { DishSaveDto } from './dto/dish.save-dto.js';

@Injectable()
export class DishesService {
  constructor(
    private readonly repository: DishesRepository,
    private readonly mapper: DishesMapper,
  ) {}

  async findAll(): Promise<DishDto[]> {
    const dishes: Dish[] = await this.repository.findAllAvailable();
    return this.mapper.mapEntityListToDtoList(dishes);
  }


  async findEntityById(id: number): Promise<Dish> {
    const dish: Dish | null = await this.repository.findById(id);
    if (!dish) {
      throw new NotFoundException(`Dish with id ${id} not found`);
    }
    return dish;
  }

  async findById(id: number): Promise<DishDto> {
    const dish: Dish = await this.findEntityById(id);
    return this.mapper.mapEntityToDto(dish);
  }

  async create(saveDto: DishSaveDto): Promise<DishDto> {
    const entity: Dish = this.mapper.mapDtoToEntity(saveDto);
    const saved: Dish = await this.repository.save(entity);
    return this.mapper.mapEntityToDto(saved);
  }
}

