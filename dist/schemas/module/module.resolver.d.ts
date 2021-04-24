import { Module } from 'src/entities/module.entity';
import { ModuleService } from './module.service';
export declare class ModuleResolver {
    private moduleService;
    constructor(moduleService: ModuleService);
    getModules(): Promise<Module[]>;
    getModuleById(id: number): Promise<Module>;
}
