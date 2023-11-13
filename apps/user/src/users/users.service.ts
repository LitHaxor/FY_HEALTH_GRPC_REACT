import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from 'apps/gateway/src/auth/dto/login.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async CreateUser(createUserDto: CreateUserDto) {
    const existingUser = await this.usersRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });

    if (existingUser) {
      return {
        status: HttpStatus.CONFLICT,
        message: 'User with this email already exists',
      };
    }

    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  async getUserByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      where: {
        email,
      },
    });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  FindAllUsers() {
    return this.usersRepository.find();
  }

  FindOneUser(id: number) {
    return this.usersRepository.findOne({
      where: { id },
    });
  }

  UpdateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update({ id }, updateUserDto);
  }

  async GetAuthUser({ email, password }: LoginDto) {
    const user = await this.getUserByEmail(email);
    const isPassMatched = await user.comparePassword(password);

    if (isPassMatched) {
      return user;
    } else {
      return null;
    }
  }

  RemoveUser(id: number) {
    return this.usersRepository.delete({ id });
  }
}
