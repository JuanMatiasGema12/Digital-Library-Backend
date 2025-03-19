import { PartialType } from '@nestjs/swagger';
import { IsString, IsUUID, IsNumber, Min, Max } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  content: string;

  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;

  @IsUUID()
  bookId: string;

  @IsUUID()
  userId: string;
}

export class UpdateReviewDto extends PartialType(CreateReviewDto) {}
