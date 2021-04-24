import { Module } from '@nestjs/common';
import { CommerceService } from './commerce.service';
import { CommerceResolver } from './commerce.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commerce } from 'src/entities/commerce.entity';
import { Branch } from 'src/entities/branch.entity';
import { Municipality } from 'src/entities/municipality.entity';
import { Department } from 'src/entities/department.entity';
import { Region } from 'src/entities/region.entity';
import { CommerceType } from 'src/entities/commerce_type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Commerce,
      Branch,
      Municipality,
      Department,
      Region,
      CommerceType
    ])
  ],
  providers: [CommerceService, CommerceResolver]
})
export class CommerceModule { }
