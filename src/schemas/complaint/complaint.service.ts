import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Complaint } from 'src/entities/complaint.entity';
import { Commerce } from 'src/entities/commerce.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class ComplaintService {
  constructor(
    @InjectRepository(Complaint) private complaintRespository: Repository<Complaint>,
    private connection: Connection
  ) { }

  async getComplaintByCommerce(commerceId: number): Promise<any> {
    try {
      const commerce = await this.connection.getRepository(Commerce)
        .createQueryBuilder("commerce")
        .leftJoinAndSelect("commerce.commerce_type", "commerce_type")
        .leftJoinAndSelect("commerce.branches", "branches")
        .leftJoinAndSelect("branches.complaints", "complaints")
        .leftJoinAndSelect("branches.municipality", "municipality")
        .leftJoinAndSelect("municipality.department", "department")
        .leftJoinAndSelect("department.region", "region")
        .where("commerce.id = :commerceId", { commerceId })
        .getOne();

      const count = await this.connection.getRepository(Complaint)
        .createQueryBuilder("complaint")
        .leftJoinAndSelect("complaint.branch", "branch")
        .leftJoinAndSelect("branch.commerce", "commerce")
        .where("commerce.id = :commerceId", { commerceId })
        .getCount();
      return {
        success: true,
        error: null,
        data: commerce,
        count
      }
    } catch (e) {
      return {
        success: false,
        error: e.message,
        data: null,
        count: null
      }
    }
  }

  async getComplaintByRegion(regionId: number): Promise<Complaint[]> {
    console.log(regionId)
    return await this.complaintRespository.find({ relations: ['branch'] });
  }
  async getComplaintByDepartment(departmentId: number): Promise<Complaint[]> {
    console.log(departmentId)
    return await this.complaintRespository.find({ relations: ['branch'] });
  }

  async getComplaintByMunicipality(municipalityId: number): Promise<Complaint[]> {
    console.log(municipalityId)
    return await this.complaintRespository.find({ relations: ['branch'] });
  }
}
