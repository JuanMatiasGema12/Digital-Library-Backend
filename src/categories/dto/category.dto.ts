import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
