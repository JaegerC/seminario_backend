import { Repository, Connection } from 'typeorm';
import { Department } from '../../entities/department.entity';
export declare class DepartmentService {
    private departmentRepo;
    private connection;
    constructor(departmentRepo: Repository<Department>, connection: Connection);
    getDepartments(): Promise<Department[]>;
    getDepartmentById(id: number): Promise<Department>;
}
