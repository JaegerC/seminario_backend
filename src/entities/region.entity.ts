import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Department } from './department.entity';

@Entity()
export class Region extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: "80", nullable: false })
  name: string;

  @OneToMany(() => Department, department => department.region)
  departments: Department[];
}
