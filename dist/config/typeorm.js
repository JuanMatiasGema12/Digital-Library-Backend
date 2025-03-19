"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
(0, dotenv_1.config)({ path: '.env' });
const configTypeORM = {
    type: 'postgres',
    database: process.env.DB_NAME || 'default_db',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/**/migrations/*{.ts,.js}'],
    dropSchema: process.env.DB_DROP === 'true',
    synchronize: process.env.DB_SYNC === 'true',
    logging: process.env.DB_LOGGING === 'true',
};
exports.default = (0, config_1.registerAs)('typeorm', () => configTypeORM);
exports.connectionSource = new typeorm_1.DataSource(configTypeORM);
//# sourceMappingURL=typeorm.js.map