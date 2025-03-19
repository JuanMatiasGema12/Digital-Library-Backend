import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from '../auth/dto/loginUserDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getUsers() {
    return await this.userRepository.find({
      select: ['id', 'name', 'email'],
    });
  }

  async getUserById(id: string) {
    const user = await this.userRepository.findOne({
      where: { id },
      select: ['id', 'name', 'email'],
    });

    if (!user) {
      throw new NotFoundException('User with this id does not exist');
    }

    return user;
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User with this id does not exist');
    }

    Object.assign(user, updateUserDto);

    return await this.userRepository.save(user);
  }

  async deleteUser(id: string) {
    const userFound = await this.userRepository.findOne({
      where: { id },
    });

    if (!userFound) {
      throw new NotFoundException('User with this id does not exist');
    }

    await this.userRepository.remove(userFound);

    return 'User deleted successfully';
  }
}
