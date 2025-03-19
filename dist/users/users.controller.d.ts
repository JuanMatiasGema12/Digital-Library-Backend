import { UsersService } from './users.service';
import { UpdateUserDto } from '../auth/dto/loginUserDto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<import("./users.entity").User[]>;
    getUserById(id: string): Promise<import("./users.entity").User>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<import("./users.entity").User>;
    deleteUser(id: string): Promise<string>;
}
