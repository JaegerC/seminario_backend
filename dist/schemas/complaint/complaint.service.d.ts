import { Complaint } from 'src/entities/complaint.entity';
import { Connection, Repository } from 'typeorm';
export declare class ComplaintService {
    private complaintRespository;
    private connection;
    constructor(complaintRespository: Repository<Complaint>, connection: Connection);
    getComplaintByCommerce(commerceId: number): Promise<any>;
    getComplaintByRegion(regionId: number): Promise<any>;
    getComplaintByDepartment(departmentId: number): Promise<any>;
    getComplaintByMunicipality(municipalityId: number): Promise<any>;
}
