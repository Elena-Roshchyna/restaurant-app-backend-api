import { ApiProperty } from '@nestjs/swagger';

export class GuestSaveDto {
  @ApiProperty({ example: 'Anna Ivanova' })
  fullName: string;

  @ApiProperty({ example: '+971500000001' })
  phone: string;

  @ApiProperty({ example: 'anna@mail.com' })
  email: string;
}

