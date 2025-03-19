import { Book } from './books.entity';
import { Repository } from 'typeorm';
import { CreateBookDto, UpdateBookDto } from './dto/books.dto';
import { Category } from 'src/categories/categories.entity';
export declare class BooksService {
    private readonly bookRepository;
    private readonly categoryRepository;
    constructor(bookRepository: Repository<Book>, categoryRepository: Repository<Category>);
    getBooks(): Promise<Book[]>;
    getBookById(id: string): Promise<Book>;
    createBook(createBook: CreateBookDto): Promise<Book>;
    updateBook(id: string, updateBook: UpdateBookDto): Promise<Book>;
    deleteBook(id: string): Promise<string>;
}
