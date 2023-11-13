import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService as UserGrpcClient } from 'apps/user/src/users/users.service';
import { LoginDto } from '../auth/dto/login.dto';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class UserService implements OnModuleInit {
  private userGrpcClient: UserGrpcClient;

  constructor(@Inject('USER_PACKAGE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.userGrpcClient =
      this.client.getService<UserGrpcClient>('UsersService');
  }

  create(createUserDto: CreateUserDto) {
    return this.userGrpcClient.CreateUser(createUserDto);
  }

  findAll() {
    return this.userGrpcClient.FindAllUsers();
  }

  findOne(id: number) {
    return this.userGrpcClient.FindOneUser(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userGrpcClient.UpdateUser(id, updateUserDto);
  }

  remove(id: number) {
    return this.userGrpcClient.RemoveUser(id);
  }

  getUserAuth(loginDto: LoginDto) {
    return this.userGrpcClient.GetAuthUser(loginDto);
  }
}
