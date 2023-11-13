import { ApiProperty } from '@nestjs/swagger';
import { USER_ROLE } from 'apps/gateway/src/auth/dto/register.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Email',
    type: String,
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Password',
    type: String,
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: 'name',
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'User Role',
    type: USER_ROLE,
  })
  @IsEnum(USER_ROLE)
  @IsOptional()
  userRole: USER_ROLE;
}
