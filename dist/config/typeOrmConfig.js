"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const config = {
    type: 'mysql',
    host: process.env.HOSTNAME || '104.236.240.215',
    port: 3306,
    username: process.env.USERNAME || 'diaco_admin',
    password: process.env.PASSWORD || 'super_secret_pass',
    database: process.env.DB_NAME || 'diaco',
    autoLoadEntities: true,
    synchronize: true,
    entities: [path_1.join(__dirname, 'entities/*.entity{.ts,.js}')],
    migrations: [path_1.join(__dirname, 'migrations/*{.ts,.js}')]
};
exports.default = config;
//# sourceMappingURL=typeOrmConfig.js.map