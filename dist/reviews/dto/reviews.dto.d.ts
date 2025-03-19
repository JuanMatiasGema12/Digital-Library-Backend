export declare class CreateReviewDto {
    content: string;
    rating: number;
    bookId: string;
    userId: string;
}
declare const UpdateReviewDto_base: import("@nestjs/common").Type<Partial<CreateReviewDto>>;
export declare class UpdateReviewDto extends UpdateReviewDto_base {
}
export {};
