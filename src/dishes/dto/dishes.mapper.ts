import { Injectable } from '@nestjs/common';
import { Dish } from '../dish.entity.js';
import { DishSaveDto } from './dish.save-dto.js';
import { DishDto } from './dish.dto.js';

@Injectable()
export class DishesMapper {
  mapDtoToEntity(saveDto: DishSaveDto): Dish {
    const entity: Dish = new Dish();
    entity.name = saveDto.name;
    entity.description = saveDto.description;
    entity.price = saveDto.price;
    entity.category = saveDto.category;
    return entity;
  }

  mapEntityToDto(entity: Dish): DishDto {
    const dto: DishDto = new DishDto();
    dto.id = entity.id;
    dto.name = entity.name;
    dto.description = entity.description;
    dto.price = Number(entity.price); // PostgreSQL отдаёт decimal строкой
    dto.category = entity.category;
    dto.available = entity.available;
    return dto;
  }

  mapEntityListToDtoList(entityList: Dish[]): DishDto[] {
    if (!entityList) {
      return [];
    }
    return entityList.map((dish: Dish): DishDto => this.mapEntityToDto(dish));
  }
}


