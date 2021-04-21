import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { Client } from '../../entities/client.entity';
import { Invoice } from '../../entities/invoce.entity';
import { Product } from '../../entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Invoice,
      Client,
      Product
    ])
  ],
  providers: [InvoiceService],
  controllers: [InvoiceController]
})
export class InvoiceModule { }
