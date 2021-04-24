import { BaseEntity } from "typeorm";
import { Region } from './region.entity';
import { Municipality } from './municipality.entity';
export declare class Department extends BaseEntity {
    id: number;
    name: string;
    region: Region;
    municipalities: Municipality[];
}
