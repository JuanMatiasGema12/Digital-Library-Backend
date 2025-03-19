import { CategoryService } from './categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getCategories(): Promise<import("./categories.entity").Category[]>;
    getCategoryById(id: string): Promise<string>;
    createCategory(createCategory: CreateCategoryDto): Promise<string>;
    updateCategory(id: string, updateCategory: UpdateCategoryDto): Promise<string>;
    deleteCategoryById(id: string): Promise<string>;
}
