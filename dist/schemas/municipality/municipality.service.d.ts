import { Connection, Repository } from 'typeorm';
import { Municipality } from '../../entities/municipality.entity';
export declare class MunicipalityService {
    private muniRepo;
    private connection;
    constructor(muniRepo: Repository<Municipality>, connection: Connection);
    getMunicipalities(): Promise<Municipality[]>;
    getMunicipalityById(id: number): Promise<Municipality>;
}
