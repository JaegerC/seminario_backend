import { Args, Query, Resolver } from '@nestjs/graphql';
import { Municipality } from 'src/entities/municipality.entity';
import { MunicipalityService } from './municipality.service';
@Resolver()
export class MunicipalityResolver {
  constructor(
    private muniService: MunicipalityService
  ) { }

  @Query()
  async getMunicipalities(): Promise<Municipality[]> {
    return await this.muniService.getMunicipalities();
  }

  @Query()
  async getMunicipalityById(
    @Args('id') id: number
  ): Promise<Municipality> {
    return await this.muniService.getMunicipalityById(id);
  }
}
