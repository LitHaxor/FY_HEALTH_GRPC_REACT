import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async register(registerDto: RegisterDto) {
    const response = await this.userService.create(registerDto);
    if ((response as any)?.status === HttpStatus.CONFLICT) {
      throw new ConflictException((response as any)?.message);
    }

    if (response) {
      return response;
    } else {
      return null;
    }
  }

  async login(loginDto: LoginDto) {
    const user = this.userService.getUserAuth(loginDto);
    if (user) {
      return user;
    } else {
      return null;
    }
  }
}
