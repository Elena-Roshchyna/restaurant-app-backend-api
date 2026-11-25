import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  Validate,
} from 'class-validator';
import { PhoneNumberValidator } from '../validation/phone-number.validator.js';

export class GuestSaveDto {
  @ApiProperty({ example: 'Anna Ivanova' })
  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  @Matches(/^[A-Za-zА-Яа-яЁё\- ]+$/, {
    message: 'Full name should contain only letters, spaces and dashes',
  })
  fullName: string;


  @ApiProperty({ example: '+971500000001' })
  @Validate(PhoneNumberValidator)
  phone: string;


  @ApiProperty({ example: 'anna@mail.com' })
  @IsEmail()
  email: string;
}



