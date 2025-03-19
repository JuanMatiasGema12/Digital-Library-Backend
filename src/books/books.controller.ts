import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto, UpdateBookDto } from './dto/books.dto';
import { Public } from 'src/decorators/decorator';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks() {
    return this.booksService.getBooks();
  }

  @Get(':id')
  getBookById(@Param('id', ParseUUIDPipe) id: string) {
    return this.booksService.getBookById(id);
  }

  @Public()
  @ApiOperation({ summary: 'Create a new book' })
  @ApiBody({
    description: 'Book data to be created',
    schema: {
      example: {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'A novel set in the Jazz Age.',
        publishedYear: 1925,
        categoryId: '74956582-4cbe-495c-9e8d-68ed38169c47',
      },
    },
  })
  @Post()
  createBook(@Body() createBook: CreateBookDto) {
    return this.booksService.createBook(createBook);
  }

  @Put(':id')
  updateBook(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateBook: UpdateBookDto,
  ) {
    return this.booksService.updateBook(id, updateBook);
  }

  @Delete(':id')
  deleteBook(@Param('id', ParseUUIDPipe) id: string) {
    return this.booksService.deleteBook(id);
  }
}
