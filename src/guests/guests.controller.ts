import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    HttpCode,
    HttpStatus,
    Delete,
} from '@nestjs/common';
import { Guest } from './guest.entity.js';

@Controller('guests')
export class GuestsController {
    @Post()
    create(@Body() guest: Guest): Guest {
        console.log('Saved guest: ', guest);
        guest.id = 5;
        return guest;
    }

    @Get()
    getAll(): Guest[] {
        const guest1: Guest = new Guest();
        guest1.fullName = 'Anna Ivanova';
        const guest2: Guest = new Guest();
        guest2.fullName = 'Ivan Petrov';

        return [guest1, guest2];
    }

    @Get(':id')
    getById(@Param('id', ParseIntPipe) id: number): Guest {
        console.log(id);
        const guest: Guest = new Guest();
        guest.fullName = 'Maria Sidorova';
        return guest;
    }

    @Patch(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    update(@Param('id', ParseIntPipe) id: number, @Body() guest: Guest): void {
        console.log(id);
        console.log(guest);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteById(@Param('id', ParseIntPipe) id: number): void {
        console.log(id);
    }
}

