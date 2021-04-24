import { Region } from 'src/entities/region.entity';
import { RegionService } from './region.service';
export declare class RegionResolver {
    private regionService;
    constructor(regionService: RegionService);
    getRegions(): Promise<Region[]>;
    getRegionById(id: number): Promise<Region>;
}
