import { Review } from './reviews.entity';
import { Repository } from 'typeorm';
import { CreateReviewDto, UpdateReviewDto } from './dto/reviews.dto';
import { Book } from 'src/books/books.entity';
import { User } from 'src/users/users.entity';
export declare class ReviewsService {
    private readonly reviewsRepository;
    private readonly booksRepository;
    private readonly usersRepository;
    constructor(reviewsRepository: Repository<Review>, booksRepository: Repository<Book>, usersRepository: Repository<User>);
    getAllReviews(): Promise<Review[]>;
    getReviewById(id: string): Promise<Review>;
    createReview(createReview: CreateReviewDto): Promise<{
        message: string;
        review: {
            content: string;
            rating: number;
            book: {
                title: string;
                author: string;
                description: string;
                publishedYear: number;
            };
            user: {
                name: string;
                email: string;
            };
        };
    }>;
    updateReview(id: string, updateReview: UpdateReviewDto): Promise<string>;
    deleteReview(id: string): Promise<string>;
}
