import { Category } from 'src/categories/categories.entity';
import { Review } from 'src/reviews/reviews.entity';
export declare class Book {
    id: string;
    title: string;
    author: string;
    description: string;
    publishedYear: number;
    createdAt: Date;
    updatedAt: Date;
    category: Category;
    reviews: Review[];
}
