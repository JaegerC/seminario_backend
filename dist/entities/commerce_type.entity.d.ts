import { BaseEntity } from "typeorm";
import { Commerce } from './commerce.entity';
export declare class CommerceType extends BaseEntity {
    id: number;
    name: string;
    commerce: Commerce;
}
