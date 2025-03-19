import { Review } from '../reviews/reviews.entity';
export declare enum Role {
    ADMIN = "admin",
    DEFAULT = "default"
}
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    reviews: Review[];
}
