import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { Product } from '../../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
    private connection: Connection
  ) { }

  async getAllProducts(): Promise<Product[]> {
    try {
      return await this.productRepo.find();
    } catch (err) {
      return err;
    }
  }

  async getProductById(id: string): Promise<Product> {
    try {
      return await this.productRepo.findOne(id);
    } catch (err) {
      return err;
    }
  }
}
