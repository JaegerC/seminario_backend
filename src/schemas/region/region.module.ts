import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { Region } from '../../entities/region.entity';
import { Department } from '../../entities/department.entity';
import { Municipality } from '../../entities/municipality.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionResolver } from './region.resolver';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Region,
      Department,
      Municipality
    ])
  ],
  providers: [RegionService, RegionResolver],
  controllers: []
})
export class RegionModule { }
