import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Commerce } from './commerce.entity';

@Entity()
export class CommerceType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: "180", nullable: false })
  name: string;

  @OneToMany(() => Commerce, commerce => commerce.commerce_type)
  commerce: Commerce;
}
