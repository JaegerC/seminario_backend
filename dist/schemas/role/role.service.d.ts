import { Role } from 'src/entities/role.entity';
import { Repository, Connection } from 'typeorm';
export declare class RoleService {
    private roleRepository;
    private connection;
    constructor(roleRepository: Repository<Role>, connection: Connection);
}
