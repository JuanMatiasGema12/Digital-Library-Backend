import { PickType } from '@nestjs/swagger';

import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'The name of the user',
    example: 'John Doe',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    description: 'The email of the user',
    required: true,
    example: 'mg12@gmail.com',
  })
  @IsEmail({}, { message: 'El correo electrónico no es válido' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: String,
    description: 'The password of the user (min 6 characters)',
    required: true,
    example: '!Admin123',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;
}
export class LoginUserDto extends PickType(CreateUserDto, [
  'email',
  'password',
]) {}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
