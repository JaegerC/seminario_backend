import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from './schemas/client/client.module';
import { ProductModule } from './schemas/product/product.module';
import { InvoiceModule } from './schemas/invoice/invoice.module';
import ormConfig from './config/typeOrmConfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    ClientModule,
    ProductModule,
    InvoiceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
