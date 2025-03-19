import { BooksService } from './books.service';
import { CreateBookDto, UpdateBookDto } from './dto/books.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    getBooks(): Promise<import("./books.entity").Book[]>;
    getBookById(id: string): Promise<import("./books.entity").Book>;
    createBook(createBook: CreateBookDto): Promise<import("./books.entity").Book>;
    updateBook(id: string, updateBook: UpdateBookDto): Promise<import("./books.entity").Book>;
    deleteBook(id: string): Promise<string>;
}
