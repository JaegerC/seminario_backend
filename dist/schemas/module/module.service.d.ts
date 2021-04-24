import { Connection, Repository } from 'typeorm';
import { Module } from '../../entities/module.entity';
export declare class ModuleService {
    private moduleRepository;
    private connection;
    constructor(moduleRepository: Repository<Module>, connection: Connection);
    getModules(): Promise<Module[]>;
    getModuleById(id: number): Promise<Module>;
}
