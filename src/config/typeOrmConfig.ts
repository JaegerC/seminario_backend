import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.HOSTNAME || '104.236.240.215',
  port: 3306,
  username: process.env.USERNAME || 'diaco_admin',
  password: process.env.PASSWORD || 'super_secret_pass',
  database: process.env.DB_NAME || 'diaco',
  autoLoadEntities: true,
  synchronize: true,
  entities: [join(__dirname, 'entities/*.entity{.ts,.js}')],
  migrations: [join(__dirname, 'migrations/*{.ts,.js}')]
};

export default config;
