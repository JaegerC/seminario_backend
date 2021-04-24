import { Args, Query, Resolver } from '@nestjs/graphql';
import { Commerce } from 'src/entities/commerce.entity';
import { CommerceService } from './commerce.service';

@Resolver()
export class CommerceResolver {
  constructor(
    private commerceService: CommerceService
  ) { }

  @Query()
  async getCommerces(): Promise<Commerce[]> {
    return await this.commerceService.getCommerces();
  }

  @Query()
  async getCommerceByFilter(
    @Args('commerce_name') commerce_name: string,
    @Args('regionId') regionId: number,
    @Args('departmentId') departmentId: number,
    @Args('municipalityId') municipalityId: number
  ): Promise<any> {
    return await this.commerceService.getCommerceByFilter(
      commerce_name,
      regionId,
      departmentId,
      municipalityId
    );
  }

}
