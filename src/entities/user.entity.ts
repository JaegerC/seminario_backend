import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Role } from './role.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: "80" })
  name: string;

  @Column({ type: "varchar", length: "80" })
  lastname: string;

  @Column({ type: "varchar", length: "80" })
  phone: string;

  @Column({ type: "date" })
  date_of_birth: Date;

  @Column({ type: "varchar", length: "80" })
  email: string

  @Column({ type: "varchar", length: "180" })
  password: string

  @Column({ type: "boolean", default: true })
  isActive: boolean;

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

  @ManyToOne(() => Role, role => role.users)
  role: Role;
}
