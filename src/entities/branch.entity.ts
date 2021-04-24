import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, OneToMany } from "typeorm";
import { Commerce } from './commerce.entity';
import { Municipality } from './municipality.entity';
import { Complaint } from './complaint.entity';

@Entity()
export class Branch extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: "180", nullable: false })
  name: string;

  @Column({ type: "varchar", length: "240", nullable: false })
  address: string;

  @Column({ type: "int", nullable: false })
  number: number;

  @Column({ type: "boolean", default: true })
  is_actve: boolean;

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

  @ManyToOne(() => Commerce, commerce => commerce.branches)
  commerce: Commerce;

  @ManyToOne(() => Municipality, municipality => municipality.branches)
  municipality: Municipality;

  @OneToMany(() => Complaint, complaint => complaint.branch)
  complaints: Complaint[];
}
