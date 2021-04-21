import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from '../../entities/product.entity';
import { Invoice } from '../../entities/invoce.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      Invoice
    ])
  ],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule { }
