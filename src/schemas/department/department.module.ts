import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { Department } from '../../entities/department.entity';
import { Region } from '../../entities/region.entity';
import { Municipality } from '../../entities/municipality.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentResolver } from './department.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Department,
      Region,
      Municipality
    ])
  ],
  providers: [DepartmentService, DepartmentResolver],
  controllers: []
})
export class DepartmentModule { }
