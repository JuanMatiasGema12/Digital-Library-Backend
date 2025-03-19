/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/loginUserDto';
import { User } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/loginUserDto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;

    const user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      throw new Error('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });

    await this.userRepository.save(newUser);
    return 'User created successfully';
  }

  async signIn(loginUserData: LoginUserDto): Promise<{ access_token: string }> {
    const user = await this.userRepository.findOne({
      where: { email: loginUserData.email },
    });

    if (!user) {
      throw new ConflictException('User with this email does not exist');
    }

    const isPasswordValid = await bcrypt.compare(
      loginUserData.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new BadRequestException(
        'Either the email or password is incorrect',
      );
    }

    const payload = { sub: user.id, name: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
