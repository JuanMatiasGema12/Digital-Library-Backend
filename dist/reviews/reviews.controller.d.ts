import { ReviewsService } from './reviews.service';
import { CreateReviewDto, UpdateReviewDto } from './dto/reviews.dto';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    getAllReviews(): Promise<import("./reviews.entity").Review[]>;
    getReviewById(id: string): Promise<import("./reviews.entity").Review>;
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
