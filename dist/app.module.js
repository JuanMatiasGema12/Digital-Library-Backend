"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("./config/typeorm");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const reviews_module_1 = require("./reviews/reviews.module");
const books_module_1 = require("./books/books.module");
const categories_module_1 = require("./categories/categories.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [typeorm_2.default],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    const config = configService.get('typeorm');
                    if (!config) {
                        throw new Error('TypeORM configuration is not defined');
                    }
                    return config;
                },
            }),
            users_module_1.usersModule,
            auth_module_1.AuthModule,
            reviews_module_1.ReviewsModule,
            books_module_1.BooksModule,
            categories_module_1.CategoriesModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map