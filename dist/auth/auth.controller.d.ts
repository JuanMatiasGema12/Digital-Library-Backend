import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/loginUserDto';
import { LoginUserDto } from './dto/loginUserDto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(createUserDto: CreateUserDto): Promise<string>;
    signIn(loginUserData: LoginUserDto): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
