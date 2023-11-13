import {
  ConflictException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UsersService as UserGrpcClient } from 'apps/user/src/users/users.service';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  private userGrpcClient: UserGrpcClient;

  constructor(@Inject('USER_PACKAGE') private client?: ClientGrpc) {}

  onModuleInit() {
    this.userGrpcClient =
      this.client.getService<UserGrpcClient>('UsersService');
  }
  async register(registerDto: RegisterDto) {
    const response = await this.userGrpcClient.CreateUser(registerDto);
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
    const user = await this.userGrpcClient.GetAuthUser(loginDto);
    if (user) {
      return user;
    } else {
      return null;
    }
  }
}
