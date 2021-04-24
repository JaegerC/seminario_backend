import { Commerce } from 'src/entities/commerce.entity';
import { Connection, Repository } from 'typeorm';
export declare class CommerceService {
    private commerceRepository;
    private connection;
    constructor(commerceRepository: Repository<Commerce>, connection: Connection);
    getCommerces(): Promise<Commerce[]>;
    getCommerceDataById(commerceId: number): Promise<Commerce>;
    getCommerceByFilter(commerce_name: string, regionId: number, departmentId: number, municipalityId: number): Promise<any>;
}
