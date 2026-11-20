import { ApiProperty } from '@nestjs/swagger';

export class GuestDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  fullName: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;
}

