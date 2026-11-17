import { Module } from '@nestjs/common';
import { GuestsController } from './guests.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guest } from './guest.entity.js';

@Module({
    controllers: [GuestsController],
    imports: [TypeOrmModule.forFeature([Guest])],
})
export class GuestsModule {}

