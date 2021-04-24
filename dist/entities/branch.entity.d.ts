import { BaseEntity } from "typeorm";
import { Commerce } from './commerce.entity';
import { Municipality } from './municipality.entity';
import { Complaint } from './complaint.entity';
export declare class Branch extends BaseEntity {
    id: number;
    name: string;
    address: string;
    number: number;
    is_actve: boolean;
    createdAt: Date;
    updatedAt: Date;
    commerce: Commerce;
    municipality: Municipality;
    complaints: Complaint[];
}
