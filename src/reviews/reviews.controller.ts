import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto, UpdateReviewDto } from './dto/reviews.dto';
import { Public } from 'src/decorators/decorator';

@Public()
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  getAllReviews() {
    return this.reviewsService.getAllReviews();
  }

  @Get(':id')
  getReviewById(@Param('id', ParseUUIDPipe) id: string) {
    return this.reviewsService.getReviewById(id);
  }

  @Post()
  createReview(@Body() createReview: CreateReviewDto) {
    return this.reviewsService.createReview(createReview);
  }

  @Put(':id')
  updateReview(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateReview: UpdateReviewDto,
  ) {
    return this.reviewsService.updateReview(id, updateReview);
  }

  @Delete(':id')
  deleteReview(@Param('id', ParseUUIDPipe) id: string) {
    return this.reviewsService.deleteReview(id);
  }
}
