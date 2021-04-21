import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Client } from './client.entity';
import { Product } from './product.entity';
@Entity()
export class Invoice extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 240 })
  concept: string;

  @Column({ type: 'int' })
  items: number;

  @Column({ type: 'double' })
  total: number;

  @ManyToOne(
    () => Product,
    product => product.invoice,
  )
  product: Product;

  @ManyToOne(
    () => Client,
    client => client.invoice,
  )
  client: Client;
}
