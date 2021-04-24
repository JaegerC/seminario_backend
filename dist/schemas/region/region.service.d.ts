import { Connection, Repository } from 'typeorm';
import { Region } from '../../entities/region.entity';
export declare class RegionService {
    private regionRepo;
    private connection;
    constructor(regionRepo: Repository<Region>, connection: Connection);
    getRegions(): Promise<Region[]>;
    getRegionById(id: number): Promise<Region>;
}
