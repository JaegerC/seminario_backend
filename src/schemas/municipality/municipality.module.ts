import { Module } from '@nestjs/common';
import { MunicipalityService } from './municipality.service';
import { MunicipalityResolver } from './municipality.resolver';
import { Region } from '../../entities/region.entity';
import { Department } from '../../entities/department.entity';
import { Municipality } from '../../entities/municipality.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Branch } from '../../entities/branch.entity';
import { Commerce } from '../../entities/commerce.entity';
import { Complaint } from '../../entities/complaint.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Region,
      Department,
      Municipality,
      Branch,
      Commerce,
      Complaint
    ])
  ],
  providers: [MunicipalityService, MunicipalityResolver],
  controllers: []
})
export class MunicipalityModule { }
