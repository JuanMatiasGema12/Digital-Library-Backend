import { Injectable, NotFoundException } from '@nestjs/common';
import { Review } from './reviews.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateReviewDto, UpdateReviewDto } from './dto/reviews.dto';
import { Book } from 'src/books/books.entity';
import { User } from 'src/users/users.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewsRepository: Repository<Review>,

    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async getAllReviews() {
    return await this.reviewsRepository.find();
  }

  async getReviewById(id: string) {
    const review = await this.reviewsRepository.findOne({
      where: { id },
    });

    if (!review) {
      throw new NotFoundException(`The review with id ${id} was not found`);
    }

    return review;
  }

  async createReview(createReview: CreateReviewDto) {
    const book = await this.booksRepository.findOne({
      where: { id: createReview.bookId },
    });

    if (!book) {
      throw new NotFoundException(
        `Book with ID "${createReview.bookId}" not found`,
      );
    }

    const user = await this.usersRepository.findOne({
      where: { id: createReview.userId },
    });

    if (!user) {
      throw new NotFoundException(
        `User with ID "${createReview.userId}" not found`,
      );
    }

    const newReview = this.reviewsRepository.create({
      content: createReview.content,
      rating: createReview.rating,
      book: book,
      user: user,
    });

    await this.reviewsRepository.save(newReview);

    return {
      message: 'Review created successfully',
      review: {
        content: newReview.content,
        rating: newReview.rating,
        book: {
          title: book.title,
          author: book.author,
          description: book.description,
          publishedYear: book.publishedYear,
        },
        user: {
          name: user.name,
          email: user.email,
        },
      },
    };
  }

  async updateReview(id: string, updateReview: UpdateReviewDto) {
    const review = await this.reviewsRepository.findOne({
      where: { id },
    });

    if (!review) {
      throw new NotFoundException(`The review with id ${id} does not exist`);
    }

    Object.assign(review, updateReview);

    await this.reviewsRepository.save(review);

    return `Review updated successfully`;
  }

  async deleteReview(id: string) {
    const review = await this.reviewsRepository.findOne({
      where: { id },
    });

    if (!review) {
      throw new NotFoundException(`The review with id ${id} does not exist`);
    }

    await this.reviewsRepository.remove(review);

    return `Review with id ${id} deleted successfully`;
  }
}
