import { BaseEntity } from "typeorm";
import { Department } from './department.entity';
export declare class Region extends BaseEntity {
    id: number;
    name: string;
    departments: Department[];
}
