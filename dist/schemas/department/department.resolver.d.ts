import { Department } from '../../entities/department.entity';
import { DepartmentService } from './department.service';
export declare class DepartmentResolver {
    private departmentService;
    constructor(departmentService: DepartmentService);
    getDepartments(): Promise<Department[]>;
    getDepartmentById(id: number): Promise<Department>;
}
