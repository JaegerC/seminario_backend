import { ConflictException, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Municipality } from '../../entities/municipality.entity';

@Injectable()
export class MunicipalityService {
  constructor(
    @InjectRepository(Municipality) private muniRepo: Repository<Municipality>,
    private connection: Connection
  ) { }

  async getMunicipalities(): Promise<Municipality[]> {
    return await this.muniRepo.find({ relations: ['department'] });
  }

  async getMunicipalityById(id: number): Promise<Municipality> {
    return await this.muniRepo.findOne(id, { relations: ['department'] });
  }
}
