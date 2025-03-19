import { PartialType } from '@nestjs/swagger';
import { IsString, IsNumber, IsUUID } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsString()
  description: string;

  @IsNumber()
  publishedYear: number;

  @IsUUID()
  categoryId: string;
}

export class UpdateBookDto extends PartialType(CreateBookDto) {}
