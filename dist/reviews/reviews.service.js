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
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const reviews_entity_1 = require("./reviews.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const books_entity_1 = require("../books/books.entity");
const users_entity_1 = require("../users/users.entity");
let ReviewsService = class ReviewsService {
    reviewsRepository;
    booksRepository;
    usersRepository;
    constructor(reviewsRepository, booksRepository, usersRepository) {
        this.reviewsRepository = reviewsRepository;
        this.booksRepository = booksRepository;
        this.usersRepository = usersRepository;
    }
    async getAllReviews() {
        return await this.reviewsRepository.find();
    }
    async getReviewById(id) {
        const review = await this.reviewsRepository.findOne({
            where: { id },
        });
        if (!review) {
            throw new common_1.NotFoundException(`The review with id ${id} was not found`);
        }
        return review;
    }
    async createReview(createReview) {
        const book = await this.booksRepository.findOne({
            where: { id: createReview.bookId },
        });
        if (!book) {
            throw new common_1.NotFoundException(`Book with ID "${createReview.bookId}" not found`);
        }
        const user = await this.usersRepository.findOne({
            where: { id: createReview.userId },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID "${createReview.userId}" not found`);
        }
        const newReview = this.reviewsRepository.create({
            content: createReview.content,
            rating: createReview.rating,
            book: book,
            user: user,
        });
        await this.reviewsRepository.save(newReview);
        return {
            message: 'Review created successfully',
            review: {
                content: newReview.content,
                rating: newReview.rating,
                book: {
                    title: book.title,
                    author: book.author,
                    description: book.description,
                    publishedYear: book.publishedYear,
                },
                user: {
                    name: user.name,
                    email: user.email,
                },
            },
        };
    }
    async updateReview(id, updateReview) {
        const review = await this.reviewsRepository.findOne({
            where: { id },
        });
        if (!review) {
            throw new common_1.NotFoundException(`The review with id ${id} does not exist`);
        }
        Object.assign(review, updateReview);
        await this.reviewsRepository.save(review);
        return `Review updated successfully`;
    }
    async deleteReview(id) {
        const review = await this.reviewsRepository.findOne({
            where: { id },
        });
        if (!review) {
            throw new common_1.NotFoundException(`The review with id ${id} does not exist`);
        }
        await this.reviewsRepository.remove(review);
        return `Review with id ${id} deleted successfully`;
    }
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(reviews_entity_1.Review)),
    __param(1, (0, typeorm_2.InjectRepository)(books_entity_1.Book)),
    __param(2, (0, typeorm_2.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map