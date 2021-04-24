import { BaseEntity } from "typeorm";
import { Role } from './role.entity';
export declare class User extends BaseEntity {
    id: number;
    name: string;
    lastname: string;
    phone: string;
    date_of_birth: Date;
    email: string;
    password: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    role: Role;
}
