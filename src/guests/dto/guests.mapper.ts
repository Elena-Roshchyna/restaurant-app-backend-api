import { Injectable } from '@nestjs/common';
import { Guest } from '../guest.entity.js';
import { GuestSaveDto } from './guest.save-dto.js';
import { GuestDto } from './guest.dto.js';

@Injectable()
export class GuestsMapper {
  mapDtoToEntity(saveDto: GuestSaveDto): Guest {
    const entity: Guest = new Guest();
    entity.fullName = saveDto.fullName;
    entity.phone = saveDto.phone;
    entity.email = saveDto.email;
    return entity;
  }

  mapEntityToDto(entity: Guest): GuestDto {
    const dto: GuestDto = new GuestDto();
    dto.id = entity.id;
    dto.fullName = entity.fullName;
    dto.phone = entity.phone;
    dto.email = entity.email;
    return dto;
  }

  mapEntityListToDtoList(entityList: Guest[]): GuestDto[] {
    if (!entityList) {
      return [];
    }
    return entityList.map((guest: Guest): GuestDto => this.mapEntityToDto(guest));
  }
}


