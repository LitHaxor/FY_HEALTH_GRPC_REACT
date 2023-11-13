import { Global, Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientGrpc } from '@nestjs/microservices';

@Global()
@Injectable()
export class UserService implements OnModuleInit {
  private userGrpcClient: any;

  constructor(@Inject('USERS_PACKAGE') private client?: ClientGrpc) {}

  onModuleInit() {
    this.userGrpcClient = this.client.getService<any>('UsersService');
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
}
