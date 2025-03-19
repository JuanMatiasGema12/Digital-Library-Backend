import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './categories.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
import { Book } from 'src/books/books.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,

    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>,
  ) {}

  async getCategories() {
    return await this.categoryRepository.find();
  }

  async getCategoryById(id: string) {
    const category = await this.categoryRepository.findOne({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException(`Category with id "${id}" not found.`);
    }

    return `"${category.name}" is the category with id ${category.id}`;
  }

  async createCategory(createCategory: CreateCategoryDto) {
    const category = await this.categoryRepository.findOne({
      where: { name: createCategory.name },
    });

    if (category) {
      throw new ConflictException(
        `Already exists a category with the name ${createCategory.name}`,
      );
    }

    const newCategory = this.categoryRepository.create(createCategory);

    await this.categoryRepository.save(newCategory);

    return 'Category created successfully';
  }

  async updateCategory(id: string, updateCategory: UpdateCategoryDto) {
    const categoryFound = await this.categoryRepository.findOne({
      where: { id },
    });

    if (!categoryFound) {
      throw new NotFoundException(`The category with id "${id}" was not found`);
    }

    Object.assign(categoryFound, updateCategory);

    await this.categoryRepository.save(categoryFound);

    return `Category with id "${id}" successfully updated`;
  }

  async deleteCategoryById(id: string) {
    const categoryFound = await this.categoryRepository.findOne({
      where: { id },
      relations: ['books'],
    });

    if (!categoryFound) {
      throw new NotFoundException(`The category with id "${id}" was not found`);
    }

    if (categoryFound.books.length > 0) {
      await this.booksRepository.remove(categoryFound.books);
    }

    await this.categoryRepository.remove(categoryFound);

    const deletedBooksTitles = categoryFound.books
      .map((book) => book.title)
      .join(', ');

    return `Category with id "${id}" deleted successfully. The following books were also deleted: ${deletedBooksTitles || 'None'}`;
  }
}
