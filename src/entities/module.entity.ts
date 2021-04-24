import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from './role.entity';

@Entity()
export class Module {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: "80", nullable: false })
  name: string;

  @Column({ type: "boolean", default: true })
  isActive: boolean;

  @ManyToMany(() => Role, role => role.modules)
  roles: Role[];
}
