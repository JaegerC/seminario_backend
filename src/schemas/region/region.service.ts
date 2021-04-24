import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Region } from '../../entities/region.entity';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(Region) private regionRepo: Repository<Region>,
    private connection: Connection
  ) { }

  async getRegions(): Promise<Region[]> {
    try {
      return await this.regionRepo.find({ relations: ['departments'] });
    } catch (err) {
      return err;
    }
  }

  async getRegionById(id: number): Promise<Region> {
    try {
      return await this.regionRepo.findOne(id, { relations: ['departments'] });
    } catch (err) {
      return err;
    }
  }
}