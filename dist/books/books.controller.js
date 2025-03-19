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
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
const books_dto_1 = require("./dto/books.dto");
const decorator_1 = require("../auth/decorator");
const swagger_1 = require("@nestjs/swagger");
let BooksController = class BooksController {
    booksService;
    constructor(booksService) {
        this.booksService = booksService;
    }
    getBooks() {
        return this.booksService.getBooks();
    }
    getBookById(id) {
        return this.booksService.getBookById(id);
    }
    createBook(createBook) {
        return this.booksService.createBook(createBook);
    }
    updateBook(id, updateBook) {
        return this.booksService.updateBook(id, updateBook);
    }
    deleteBook(id) {
        return this.booksService.deleteBook(id);
    }
};
exports.BooksController = BooksController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "getBooks", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "getBookById", null);
__decorate([
    (0, decorator_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new book' }),
    (0, swagger_1.ApiBody)({
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
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [books_dto_1.CreateBookDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "createBook", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, books_dto_1.UpdateBookDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "updateBook", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "deleteBook", null);
exports.BooksController = BooksController = __decorate([
    (0, common_1.Controller)('books'),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksController);
//# sourceMappingURL=books.controller.js.map