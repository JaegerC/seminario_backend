import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Complaint } from 'src/entities/complaint.entity';
import { Commerce } from 'src/entities/commerce.entity';
import { Connection, Repository } from 'typeorm';
import { Region } from 'src/entities/region.entity';
import { Department } from 'src/entities/department.entity';
import { Municipality } from 'src/entities/municipality.entity';
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

  async getComplaintByRegion(regionId: number): Promise<any> {
    try {
      const region = await this.connection.getRepository(Region)
        .createQueryBuilder("region")
        .leftJoinAndSelect("region.departments", "departments")
        .leftJoinAndSelect("departments.municipalities", "municipalities")
        .leftJoinAndSelect("municipalities.branches", "branches")
        .leftJoinAndSelect("branches.commerce", "commerce")
        .leftJoinAndSelect("branches.complaints", "complaints")
        .leftJoinAndSelect("commerce.commerce_type", "commerce_type")
        .where("region.id = :regionId", { regionId })
        .getOne();

      const count = await this.connection.getRepository(Complaint)
        .createQueryBuilder("complaint")
        .leftJoinAndSelect("complaint.branch", "branch")
        .leftJoinAndSelect("branch.municipality", "municipality")
        .leftJoinAndSelect("municipality.department", "department")
        .where("department.regionId = :regionId", { regionId })
        .getCount();
      return {
        success: true,
        error: null,
        data: region,
        count
      }
    } catch (err) {
      return {
        success: false,
        error: err.message,
        data: null,
        count: null
      }
    }
  }
  async getComplaintByDepartment(departmentId: number): Promise<any> {
    try {
      const department = await this.connection.getRepository(Department)
        .createQueryBuilder("department")
        .leftJoinAndSelect("department.region", "region")
        .leftJoinAndSelect("department.municipalities", "municipalities")
        .leftJoinAndSelect("municipalities.branches", "branches")
        .leftJoinAndSelect("branches.commerce", "commerce")
        .leftJoinAndSelect("branches.complaints", "complaints")
        .leftJoinAndSelect("commerce.commerce_type", "commerce_type")
        .where("department.id = :departmentId", { departmentId })
        .getOne();

      const count = await this.connection.getRepository(Complaint)
        .createQueryBuilder("complaint")
        .leftJoinAndSelect("complaint.branch", "branch")
        .leftJoinAndSelect("branch.municipality", "municipality")
        .leftJoinAndSelect("municipality.department", "department")
        .where("department.id = :departmentId", { departmentId })
        .getCount();

      return {
        success: true,
        error: null,
        data: department,
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

  async getComplaintByMunicipality(municipalityId: number): Promise<any> {
    try {
      const municipality = await this.connection.getRepository(Municipality)
        .createQueryBuilder("municipality")
        .leftJoinAndSelect("municipality.department", "department")
        .leftJoinAndSelect("department.region", "region")
        .leftJoinAndSelect("municipality.branches", "branches")
        .leftJoinAndSelect("branches.complaints", "complaints")
        .leftJoinAndSelect("branches.commerce", "commerce")
        .leftJoinAndSelect("commerce.commerce_type", "commerce_type")
        .where("municipality.id = :municipalityId", { municipalityId })
        .getOne();

      const count = await this.connection.getRepository(Complaint)
        .createQueryBuilder("complaint")
        .leftJoinAndSelect("complaint.branch", "branch")
        .leftJoinAndSelect("branch.municipality", "municipality")
        .where("municipality.id = :municipalityId", { municipalityId })
        .getCount();
      return {
        success: true,
        error: null,
        data: municipality,
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
}
