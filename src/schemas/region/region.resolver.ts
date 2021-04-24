import { Args, Query, Resolver } from '@nestjs/graphql';
import { Region } from 'src/entities/region.entity';
import { RegionService } from './region.service';

@Resolver()
export class RegionResolver {
  constructor(
    private regionService: RegionService
  ) { }

  @Query()
  async getRegions(): Promise<Region[]> {
    return await this.regionService.getRegions();
  }

  @Query()
  async getRegionById(
    @Args('id') id: number
  ): Promise<Region> {
    return await this.regionService.getRegionById(id);
  }
}
