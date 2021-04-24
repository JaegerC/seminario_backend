import { Complaint } from 'src/entities/complaint.entity';
import { Connection, Repository } from 'typeorm';
export declare class ComplaintService {
    private complaintRespository;
    private connection;
    constructor(complaintRespository: Repository<Complaint>, connection: Connection);
    getComplaintByCommerce(commerceId: number): Promise<any>;
    getComplaintByRegion(regionId: number): Promise<Complaint[]>;
    getComplaintByDepartment(departmentId: number): Promise<Complaint[]>;
    getComplaintByMunicipality(municipalityId: number): Promise<Complaint[]>;
}
