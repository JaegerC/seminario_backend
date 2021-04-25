import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Complaint } from 'src/entities/complaint.entity';
import { ComplaintService } from './complaint.service';

@Resolver()
export class ComplaintResolver {
  constructor(
    private complaintService: ComplaintService
  ) { }

  @Query()
  async getComplaintByCommerce(
    @Args('commerceId') commerceId: number
  ): Promise<any[]> {
    return await this.complaintService.getComplaintByCommerce(commerceId);
  }

  @Query()
  async getComplaintByRegion(
    @Args('regionId') regionId: number
  ): Promise<any> {
    return await this.complaintService.getComplaintByRegion(regionId);
  }

  @Query()
  async getComplaintByDepartment(
    @Args('departmentId') departmentId: number
  ): Promise<any> {
    return await this.complaintService.getComplaintByDepartment(departmentId);
  }

  @Query()
  async getComplaintByMunicipality(
    @Args('municipalityId') municipalityId: number
  ): Promise<any> {
    return await this.complaintService.getComplaintByMunicipality(municipalityId);
  }

  @Mutation()
  async createComplaint(
    @Args('detail') detail: string,
    @Args('request') request: string,
    @Args('doc_invoice') doc_invoice: string,
    @Args('branchId') branchId: number
  ): Promise<Complaint> {
    return await this.complaintService.createComplaint(detail, request, doc_invoice, branchId);
  }
}
