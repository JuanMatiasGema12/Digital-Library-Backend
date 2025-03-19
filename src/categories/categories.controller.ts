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
import { CategoryService } from './categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
import { Public } from 'src/decorators/decorator';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Public()
  @Get()
  getCategories() {
    return this.categoryService.getCategories();
  }

  @Get(':id')
  getCategoryById(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoryService.getCategoryById(id);
  }

  @Public()
  @Post()
  createCategory(@Body() createCategory: CreateCategoryDto) {
    return this.categoryService.createCategory(createCategory);
  }

  @Public()
  @Put(':id')
  updateCategory(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCategory: UpdateCategoryDto,
  ) {
    return this.categoryService.updateCategory(id, updateCategory);
  }
  @Public()
  @Delete(':id')
  deleteCategoryById(@Param('id', ParseUUIDPipe) id: string) {
    return this.categoryService.deleteCategoryById(id);
  }
}
