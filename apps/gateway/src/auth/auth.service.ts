import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  register(registerDto: RegisterDto) {
    throw new Error('Method not implemented.');
  }
  login(loginDto: LoginDto) {
    throw new Error('Method not implemented.');
  }
}
