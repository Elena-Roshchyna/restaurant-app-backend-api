import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guest } from './guest.entity.js';
import { GuestsController } from './guests.controller.js';
import { GuestsService } from './guests.service.js';
import { GuestsRepository } from './guests.repository.js';
import { GuestsMapper } from './dto/guests.mapper.js';

@Module({
  imports: [TypeOrmModule.forFeature([Guest])],
  controllers: [GuestsController],
  providers: [GuestsService, GuestsRepository, GuestsMapper],
  exports: [GuestsService, GuestsMapper],
})
export class GuestsModule {}


