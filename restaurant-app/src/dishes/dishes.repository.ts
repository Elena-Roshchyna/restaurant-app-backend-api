import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dish } from './dish.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class DishesRepository {
    constructor(
        @InjectRepository(Dish)
        private readonly repository: Repository<Dish>,
    ) {}

    async save(dish: Dish): Promise<Dish> {
        return this.repository.save(dish);
    }

    async findAllAvailable(): Promise<Dish[]> {
        return this.repository.findBy({ available: true });
    }

    async findById(id: number): Promise<Dish | null> {
        return this.repository.findOneBy({ id });
    }

    async deleteById(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}

