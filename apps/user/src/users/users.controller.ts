import { Controller } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from 'apps/gateway/src/auth/dto/login.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod('UsersService', 'CreateUser')
  create(@Payload() createUserDto: CreateUserDto) {
    return this.usersService.CreateUser(createUserDto);
  }

  @GrpcMethod('UsersService', 'FindAllUsers')
  findAll() {
    return this.usersService.FindAllUsers();
  }

  @GrpcMethod('UsersService', 'FindOneUser')
  findOne(@Payload() id: number) {
    return this.usersService.FindOneUser(id);
  }

  @GrpcMethod('UsersService', 'UpdateUser')
  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.usersService.UpdateUser(updateUserDto.id, updateUserDto);
  }

  @GrpcMethod('UsersService', 'RemoveUser')
  remove(@Payload() id: number) {
    return this.usersService.RemoveUser(id);
  }

  @GrpcMethod('UsersService', 'GetUserByEmail')
  getUserByEmail(@Payload() email: string) {
    return this.usersService.getUserByEmail(email);
  }

  @GrpcMethod('UserService', 'GetAuthUser')
  getAuthUser(@Payload() id: LoginDto) {
    return this.usersService.GetAuthUser(id);
  }
}
