import { Municipality } from 'src/entities/municipality.entity';
import { MunicipalityService } from './municipality.service';
export declare class MunicipalityResolver {
    private muniService;
    constructor(muniService: MunicipalityService);
    getMunicipalities(): Promise<Municipality[]>;
    getMunicipalityById(id: number): Promise<Municipality>;
}
