import { Test, TestingModule } from '@nestjs/testing';
import { MunicipalityResolver } from './municipality.resolver';

describe('MunicipalityResolver', () => {
  let resolver: MunicipalityResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MunicipalityResolver],
    }).compile();

    resolver = module.get<MunicipalityResolver>(MunicipalityResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
