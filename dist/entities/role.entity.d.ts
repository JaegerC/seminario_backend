import { BaseEntity } from "typeorm";
import { User } from './user.entity';
import { Module } from './module.entity';
export declare class Role extends BaseEntity {
    id: number;
    role_name: string;
    isAdmin: boolean;
    isActive: boolean;
    users: User[];
    modules: Module[];
}
