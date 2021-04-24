import { ComplaintService } from './complaint.service';
export declare class ComplaintResolver {
    private complaintService;
    constructor(complaintService: ComplaintService);
    getComplaintByCommerce(commerceId: number): Promise<any[]>;
    getComplaintByRegion(regionId: number): Promise<any[]>;
    getComplaintByDepartment(departmentId: number): Promise<any[]>;
    getComplaintByMunicipality(municipalityId: number): Promise<any[]>;
}
