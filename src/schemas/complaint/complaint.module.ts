import { Module } from '@nestjs/common';
import { ComplaintService } from './complaint.service';
import { ComplaintResolver } from './complaint.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Complaint } from 'src/entities/complaint.entity';
import { Branch } from 'src/entities/branch.entity';
import { Commerce } from 'src/entities/commerce.entity';
import { Department } from 'src/entities/department.entity';
import { Region } from 'src/entities/region.entity';
import { Municipality } from 'src/entities/municipality.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Complaint,
      Branch,
      Commerce,
      Municipality,
      Department,
      Region
    ])
  ],
  providers: [ComplaintService, ComplaintResolver]
})
export class ComplaintModule { }
