import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { Department } from '../../entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department) private departmentRepo: Repository<Department>,
    private connection: Connection
  ) { }

  async getDepartments(): Promise<Department[]> {
    try {
      return await this.departmentRepo.find({ relations: ['region', 'municipalities'] });
    } catch (err) {
      return err;
    }
  }

  async getDepartmentById(id: number): Promise<Department> {
    try {
      return await this.departmentRepo.findOne(id, { relations: ['region', 'municipalities'] });
    } catch (err) {
      return err;
    }
  }
}
