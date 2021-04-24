import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Region } from './region.entity';
import { Municipality } from './municipality.entity';

@Entity()
export class Department extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: "180", nullable: false })
  name: string;

  @ManyToOne(() => Region, region => region.departments)
  region: Region;

  @OneToMany(() => Municipality, municipality => municipality.department)
  municipalities: Municipality[];
}
