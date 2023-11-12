import { Test, TestingModule } from '@nestjs/testing';
import { FinalcialHealthService } from './finalcial_health.service';

describe('FinalcialHealthService', () => {
  let service: FinalcialHealthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinalcialHealthService],
    }).compile();

    service = module.get<FinalcialHealthService>(FinalcialHealthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
