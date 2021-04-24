import { Commerce } from 'src/entities/commerce.entity';
import { CommerceService } from './commerce.service';
export declare class CommerceResolver {
    private commerceService;
    constructor(commerceService: CommerceService);
    getCommerces(): Promise<Commerce[]>;
    getCommerceByFilter(commerce_name: string, regionId: number, departmentId: number, municipalityId: number): Promise<any>;
}
