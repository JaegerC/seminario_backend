import { BaseEntity } from "typeorm";
import { Department } from './department.entity';
import { Branch } from './branch.entity';
export declare class Municipality extends BaseEntity {
    id: number;
    name: string;
    department: Department;
    branches: Branch[];
}
