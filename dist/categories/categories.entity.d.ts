import { Book } from '../books/books.entity';
export declare class Category {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    books: Book[];
}
