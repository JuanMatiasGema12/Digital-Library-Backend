import { Category } from './categories.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
import { Book } from 'src/books/books.entity';
export declare class CategoryService {
    private readonly categoryRepository;
    private readonly booksRepository;
    constructor(categoryRepository: Repository<Category>, booksRepository: Repository<Book>);
    getCategories(): Promise<Category[]>;
    getCategoryById(id: string): Promise<string>;
    createCategory(createCategory: CreateCategoryDto): Promise<string>;
    updateCategory(id: string, updateCategory: UpdateCategoryDto): Promise<string>;
    deleteCategoryById(id: string): Promise<string>;
}
