import { Module } from '@nestjs/common';
import { CategoryController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './categories.entity';
import { CategoryService } from './categories.service';
import { Book } from 'src/books/books.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Book])],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoriesModule {}
