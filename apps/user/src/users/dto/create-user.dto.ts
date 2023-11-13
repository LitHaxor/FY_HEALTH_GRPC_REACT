import { USER_ROLE } from 'apps/gateway/src/auth/dto/register.dto';

export class CreateUserDto {
  email: string;
  password: string;
  name: string;
  userRole: USER_ROLE;
}
