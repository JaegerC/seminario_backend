import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from "typeorm";
import { Branch } from './branch.entity';
import { CommerceType } from './commerce_type.entity';

@Entity()
export class Commerce extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: "120", nullable: false })
  name: string;

  @Column({ type: "varchar", length: "80", nullable: true })
  trade_patent: string;

  @Column({ type: "varchar", length: "30", nullable: false })
  nit: string;

  @Column({ type: "boolean", default: true })
  is_active: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  @OneToMany(() => Branch, branch => branch.commerce)
  branches: Branch[];

  @ManyToOne(() => CommerceType, commerce_type => commerce_type.commerce)
  commerce_type: CommerceType;
}
