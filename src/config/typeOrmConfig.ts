import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.HOSTNAME || 'localhost',
  port: 3306,
  username: process.env.USERNAME || 'root',
  password: process.env.PASSWORD || 'haneganai',
  database: process.env.DB_NAME || 'desarrollo_web',
  autoLoadEntities: true,
  synchronize: true,
  entities: [join(__dirname, 'entities/*.entity{.ts,.js}')],
  migrations: [join(__dirname, 'migrations/*{.ts,.js}')]
};

export default config;
