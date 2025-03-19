"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categories_entity_1 = require("./categories.entity");
const typeorm_2 = require("typeorm");
const books_entity_1 = require("../books/books.entity");
let CategoryService = class CategoryService {
    categoryRepository;
    booksRepository;
    constructor(categoryRepository, booksRepository) {
        this.categoryRepository = categoryRepository;
        this.booksRepository = booksRepository;
    }
    async getCategories() {
        return await this.categoryRepository.find();
    }
    async getCategoryById(id) {
        const category = await this.categoryRepository.findOne({
            where: { id },
        });
        if (!category) {
            throw new common_1.NotFoundException(`Category with id "${id}" not found.`);
        }
        return `"${category.name}" is the category with id ${category.id}`;
    }
    async createCategory(createCategory) {
        const category = await this.categoryRepository.findOne({
            where: { name: createCategory.name },
        });
        if (category) {
            throw new common_1.ConflictException(`Already exists a category with the name ${createCategory.name}`);
        }
        const newCategory = this.categoryRepository.create(createCategory);
        await this.categoryRepository.save(newCategory);
        return 'Category created successfully';
    }
    async updateCategory(id, updateCategory) {
        const categoryFound = await this.categoryRepository.findOne({
            where: { id },
        });
        if (!categoryFound) {
            throw new common_1.NotFoundException(`The category with id "${id}" was not found`);
        }
        Object.assign(categoryFound, updateCategory);
        await this.categoryRepository.save(categoryFound);
        return `Category with id "${id}" successfully updated`;
    }
    async deleteCategoryById(id) {
        const categoryFound = await this.categoryRepository.findOne({
            where: { id },
            relations: ['books'],
        });
        if (!categoryFound) {
            throw new common_1.NotFoundException(`The category with id "${id}" was not found`);
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
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(categories_entity_1.Category)),
    __param(1, (0, typeorm_1.InjectRepository)(books_entity_1.Book)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CategoryService);
//# sourceMappingURL=categories.service.js.map