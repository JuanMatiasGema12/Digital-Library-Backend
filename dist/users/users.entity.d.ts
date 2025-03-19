import { Review } from '../reviews/reviews.entity';
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    reviews: Review[];
}
