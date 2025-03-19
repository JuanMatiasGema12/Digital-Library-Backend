import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import typeOrmConfig from './config/typeorm';
import { usersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ReviewsModule } from './reviews/reviews.module';
import { BooksModule } from './books/books.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
        const config = configService.get<TypeOrmModuleOptions>('typeorm');

        if (!config) {
          throw new Error('TypeORM configuration is not defined');
        }

        return config;
      },
    }),
    usersModule,
    AuthModule,
    ReviewsModule,
    BooksModule,
    CategoriesModule,
  ],
})
export class AppModule {}
