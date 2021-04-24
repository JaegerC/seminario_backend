import { Role } from './role.entity';
export declare class Module {
    id: number;
    name: string;
    isActive: boolean;
    roles: Role[];
}
