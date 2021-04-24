import { Args, Query, Resolver } from '@nestjs/graphql';
import { Department } from '../../entities/department.entity';
import { DepartmentService } from './department.service';

@Resolver()
export class DepartmentResolver {
  constructor(
    private departmentService: DepartmentService
  ) { }

  @Query()
  async getDepartments(): Promise<Department[]> {
    return await this.departmentService.getDepartments();
  }

  @Query()
  async getDepartmentById(
    @Args('id') id: number
  ): Promise<Department> {
    return await this.departmentService.getDepartmentById(id);
  }
}
