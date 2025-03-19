import { User } from './users.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from '../auth/dto/loginUserDto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    getUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    deleteUser(id: string): Promise<string>;
}
