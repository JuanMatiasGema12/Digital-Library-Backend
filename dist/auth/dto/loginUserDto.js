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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = exports.LoginUserDto = exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserDto {
    name;
    email;
    password;
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_2.ApiProperty)({
        type: String,
        description: 'The name of the user',
        example: 'John Doe',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        type: String,
        description: 'The email of the user',
        required: true,
        example: 'mg12@gmail.com',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'El correo electrónico no es válido' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_2.ApiProperty)({
        type: String,
        description: 'The password of the user (min 6 characters)',
        required: true,
        example: '!Admin123',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
class LoginUserDto extends (0, swagger_1.PickType)(CreateUserDto, [
    'email',
    'password',
]) {
}
exports.LoginUserDto = LoginUserDto;
class UpdateUserDto extends (0, swagger_2.PartialType)(CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=loginUserDto.js.map