import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
export enum USER_ROLE {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
export class RegisterDto {
  @ApiProperty({
    description: 'Email',
    example: 'example@gmail.com',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Password',
    example: 'xoxox',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'name',
    example: 'John',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'User Role',
    example: 'USER',
  })
  @IsNotEmpty()
  @IsString()
  @IsEnum(USER_ROLE)
  userRole: USER_ROLE;
}
