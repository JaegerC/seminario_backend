import { BaseEntity } from "typeorm";
import { Branch } from './branch.entity';
import { CommerceType } from './commerce_type.entity';
export declare class Commerce extends BaseEntity {
    id: number;
    name: string;
    trade_patent: string;
    nit: string;
    is_active: boolean;
    createdAt: Date;
    updatedAt: Date;
    branches: Branch[];
    commerce_type: CommerceType;
}
