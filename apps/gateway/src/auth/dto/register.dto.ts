import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
export enum USER_ROLE {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(USER_ROLE)
  userRole: USER_ROLE;
}
