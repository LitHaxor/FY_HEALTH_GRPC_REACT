import { Test, TestingModule } from '@nestjs/testing';
import { FinalcialHealthController } from './finalcial_health.controller';
import { FinalcialHealthService } from './finalcial_health.service';

describe('FinalcialHealthController', () => {
  let controller: FinalcialHealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinalcialHealthController],
      providers: [FinalcialHealthService],
    }).compile();

    controller = module.get<FinalcialHealthController>(FinalcialHealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
