import { CreateUserDto } from './dto/loginUserDto';
import { User } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/loginUserDto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    signUp(createUserDto: CreateUserDto): Promise<string>;
    signIn(loginUserData: LoginUserDto): Promise<{
        access_token: string;
    }>;
}
