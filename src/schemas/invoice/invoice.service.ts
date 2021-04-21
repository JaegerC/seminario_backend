import { ConflictException, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Invoice } from '../../entities/invoce.entity';
import { Client } from '../../entities/client.entity';
import { Product } from '../../entities/product.entity';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice) private invoceRepo: Repository<Invoice>,
    @InjectRepository(Client) private clientRepo: Repository<Client>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
    private connection: Connection
  ) { }

  async createInvoice(concept: string, items: number, productId: number, clientId: number): Promise<Invoice> {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      if (!concept || concept.trim() === "") {
        throw new NotAcceptableException("Se necesita un concepto de compra");
      }

      if (!items || isNaN(items)) {
        throw new NotAcceptableException("Se debe de proveer una cantidad de articulos");
      }

      if (!productId || isNaN(productId)) {
        throw new NotAcceptableException("Debe de seleccionar un articulo");
      }

      if (!clientId || isNaN(clientId)) {
        throw new NotAcceptableException("Debe de seleccionar un client");
      }

      const product = await this.productRepo.findOne({ where: { id: productId } });
      console.log(product)
      const client = await this.clientRepo.findOne({ where: { id: clientId } });
      if (!product) {
        throw new NotFoundException("No se encontro el producto");
      }

      if (!client) {
        throw new NotFoundException("El cliente no existe en el sistema");
      }

      if (product.quantity < items) {
        throw new ConflictException("No hay suficiente stock");
      }

      const total = items * product.price;

      const invoice = this.invoceRepo.create({
        concept,
        items,
        total,
        product,
        client
      });

      await queryRunner.manager.save(invoice);
      if (!invoice) {
        throw new ConflictException("No se pudo generar la factura");
      }

      const reamain_items = product.quantity - items;

      product.quantity = reamain_items;
      await queryRunner.manager.save(product);
      if (!product) {
        throw new ConflictException("No se actualizar el producto");
      }

      return invoice;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      return err;
    } finally {
      await queryRunner.release();
    }
  }
}
