import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.entity';
import { Repository } from 'typeorm';
import { CreateBookDto, UpdateBookDto } from './dto/books.dto';
import { Category } from 'src/categories/categories.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async getBooks() {
    return this.bookRepository.find();
  }

  async getBookById(id: string) {
    const book = await this.bookRepository.findOne({
      where: { id },
    });

    if (!book) {
      throw new NotFoundException('User with this id not found');
    }

    return book;
  }

  async createBook(createBook: CreateBookDto): Promise<Book> {
    const category = await this.categoryRepository.findOne({
      where: { id: createBook.categoryId },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    const newBook = this.bookRepository.create({
      ...createBook,
      category,
    });

    return this.bookRepository.save(newBook);
  }

  async updateBook(id: string, updateBook: UpdateBookDto) {
    const book = await this.bookRepository.findOne({
      where: { id },
    });

    if (!book) {
      throw new NotFoundException('Book with this id not found');
    }

    Object.assign(book, updateBook);

    return this.bookRepository.save(book);
  }

  async deleteBook(id: string): Promise<string> {
    const book = await this.bookRepository.findOne({
      where: { id },
    });

    if (!book) {
      throw new NotFoundException(
        'The book you are trying to delete does not exist',
      );
    }

    await this.bookRepository.remove(book);

    return `${book.title} was deleted successfully`;
  }
}
