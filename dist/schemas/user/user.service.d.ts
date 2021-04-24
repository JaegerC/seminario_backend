import { User } from 'src/entities/user.entity';
import { Connection, Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    private connection;
    constructor(userRepository: Repository<User>, connection: Connection);
}
