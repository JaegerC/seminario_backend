import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Branch } from './branch.entity';

@Entity()
export class Complaint extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "longtext", nullable: false })
  detail: string;

  @Column({ type: "varchar", nullable: true })
  request: string;

  @Column({ type: "varchar", length: "80", nullable: false })
  doc_invoice: string;

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

  @ManyToOne(() => Branch, branch => branch.complaints)
  @JoinTable()
  branch: Branch;

}
