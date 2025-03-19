import { Book } from '../books/books.entity';
import { User } from '../users/users.entity';
export declare class Review {
    id: string;
    content: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
    book: Book;
    user: User;
}
