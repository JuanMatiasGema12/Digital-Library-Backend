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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const categories_entity_1 = require("../categories/categories.entity");
const reviews_entity_1 = require("../reviews/reviews.entity");
const typeorm_1 = require("typeorm");
let Book = class Book {
    id;
    title;
    author;
    description;
    publishedYear;
    createdAt;
    updatedAt;
    category;
    reviews;
};
exports.Book = Book;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Book.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Book.prototype, "publishedYear", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Book.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Book.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categories_entity_1.Category, (category) => category.books),
    __metadata("design:type", categories_entity_1.Category)
], Book.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reviews_entity_1.Review, (review) => review.book),
    __metadata("design:type", Array)
], Book.prototype, "reviews", void 0);
exports.Book = Book = __decorate([
    (0, typeorm_1.Entity)()
], Book);
//# sourceMappingURL=books.entity.js.map