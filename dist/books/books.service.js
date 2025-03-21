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
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const books_entity_1 = require("./books.entity");
const typeorm_2 = require("typeorm");
const categories_entity_1 = require("../categories/categories.entity");
let BooksService = class BooksService {
    bookRepository;
    categoryRepository;
    constructor(bookRepository, categoryRepository) {
        this.bookRepository = bookRepository;
        this.categoryRepository = categoryRepository;
    }
    async getBooks() {
        return this.bookRepository.find();
    }
    async getBookById(id) {
        const book = await this.bookRepository.findOne({
            where: { id },
        });
        if (!book) {
            throw new common_1.NotFoundException('User with this id not found');
        }
        return book;
    }
    async createBook(createBook) {
        const category = await this.categoryRepository.findOne({
            where: { id: createBook.categoryId },
        });
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        const newBook = this.bookRepository.create({
            ...createBook,
            category,
        });
        return this.bookRepository.save(newBook);
    }
    async updateBook(id, updateBook) {
        const book = await this.bookRepository.findOne({
            where: { id },
        });
        if (!book) {
            throw new common_1.NotFoundException('Book with this id not found');
        }
        Object.assign(book, updateBook);
        return this.bookRepository.save(book);
    }
    async deleteBook(id) {
        const book = await this.bookRepository.findOne({
            where: { id },
        });
        if (!book) {
            throw new common_1.NotFoundException('The book you are trying to delete does not exist');
        }
        await this.bookRepository.remove(book);
        return `${book.title} was deleted successfully`;
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(books_entity_1.Book)),
    __param(1, (0, typeorm_1.InjectRepository)(categories_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BooksService);
//# sourceMappingURL=books.service.js.map