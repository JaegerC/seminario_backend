import { BaseEntity } from "typeorm";
import { Branch } from './branch.entity';
export declare class Complaint extends BaseEntity {
    id: number;
    detail: string;
    request: string;
    doc_invoice: string;
    createdAt: Date;
    updatedAt: Date;
    branch: Branch;
}
