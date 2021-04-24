import { Test, TestingModule } from '@nestjs/testing';
import { CommerceResolver } from './commerce.resolver';

describe('CommerceResolver', () => {
  let resolver: CommerceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommerceResolver],
    }).compile();

    resolver = module.get<CommerceResolver>(CommerceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
