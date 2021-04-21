import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '../../entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService
  ) { }

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productService.getAllProducts();
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string
  ): Promise<Product> {
    return await this.productService.getProductById(id);
  }
}
