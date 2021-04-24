import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Module } from '../../entities/module.entity';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(Module) private moduleRepository: Repository<Module>,
    private connection: Connection
  ) { }

  async getModules(): Promise<Module[]> {
    return await this.moduleRepository.find({ relations: ['roles'] });
  }

  async getModuleById(id: number): Promise<Module> {
    return await this.moduleRepository.findOne(id, { relations: ['roles'] });
  }
}
