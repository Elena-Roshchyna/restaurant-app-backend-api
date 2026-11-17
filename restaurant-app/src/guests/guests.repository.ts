import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Guest } from './guest.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class GuestsRepository {
    constructor(
        @InjectRepository(Guest)
        private readonly repository: Repository<Guest>,
    ) {}

    async save(guest: Guest): Promise<Guest> {
        return this.repository.save(guest);
    }

    async findAll(): Promise<Guest[]> {
        return this.repository.find();
    }

    async findById(id: number): Promise<Guest | null> {
        return this.repository.findOneBy({ id });
    }

    async deleteById(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
