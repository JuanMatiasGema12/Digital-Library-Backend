"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("./users.entity");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getUsers() {
        return await this.userRepository.find({
            select: ['id', 'name', 'email'],
        });
    }
    async getUserById(id) {
        const user = await this.userRepository.findOne({
            where: { id },
            select: ['id', 'name', 'email'],
        });
        if (!user) {
            throw new common_1.NotFoundException('User with this id does not exist');
        }
        return user;
    }
    async updateUser(id, updateUserDto) {
        const user = await this.userRepository.findOne({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException('User with this id does not exist');
        }
        Object.assign(user, updateUserDto);
        return await this.userRepository.save(user);
    }
    async deleteUser(id) {
        const userFound = await this.userRepository.findOne({
            where: { id },
        });
        if (!userFound) {
            throw new common_1.NotFoundException('User with this id does not exist');
        }
        await this.userRepository.remove(userFound);
        return 'User deleted successfully';
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map