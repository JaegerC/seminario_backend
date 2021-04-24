import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Department } from './department.entity';
import { Branch } from './branch.entity';

@Entity()
export class Municipality extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: "180", nullable: false })
  name: string;

  @ManyToOne(() => Department, department => department.municipalities)
  department: Department;

  @OneToMany(() => Branch, branch => branch.municipality)
  branches: Branch[];
}
