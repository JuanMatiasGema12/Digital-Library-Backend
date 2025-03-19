export declare class CreateBookDto {
    title: string;
    author: string;
    description: string;
    publishedYear: number;
    categoryId: string;
}
declare const UpdateBookDto_base: import("@nestjs/common").Type<Partial<CreateBookDto>>;
export declare class UpdateBookDto extends UpdateBookDto_base {
}
export {};
