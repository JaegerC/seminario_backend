import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { ModuleResolver } from './module.resolver';
import { Module as User_Module } from '../../entities/module.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/entities/role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User_Module,
      Role
    ])
  ],
  providers: [ModuleService, ModuleResolver]
})
export class ModuleModule { }
