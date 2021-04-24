import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user.entity';
import { Module } from './module.entity';

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: "40" })
  role_name: string;

  @Column({ type: "boolean", default: false })
  isAdmin: boolean;

  @Column({ type: "boolean", default: true })
  isActive: boolean;

  @OneToMany(() => User, user => user.role)
  users: User[];

  @ManyToMany(() => Module, module => module.roles)
  @JoinTable()
  modules: Module[];
}
