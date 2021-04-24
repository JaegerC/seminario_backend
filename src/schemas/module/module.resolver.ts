import { Resolver, Query, Args } from '@nestjs/graphql';
import { Module } from 'src/entities/module.entity';
import { ModuleService } from './module.service';

@Resolver()
export class ModuleResolver {
  constructor(
    private moduleService: ModuleService
  ) {
  }

  @Query()
  async getModules(): Promise<Module[]> {
    return await this.moduleService.getModules();
  }

  @Query()
  async getModuleById(
    @Args('id') id: number
  ): Promise<Module> {
    return await this.moduleService.getModuleById(id);
  }
}
