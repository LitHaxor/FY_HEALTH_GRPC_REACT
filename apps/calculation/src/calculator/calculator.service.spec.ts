import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorService],
    }).compile();

    service = module.get<CalculatorService>(CalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should calculate score', () => {
    const payload = {
      assets: 1000,
      debts: 100,
      expenses: 100,
      monthlyIncome: 1000,
    };
    const result = service.calculate(payload);
    expect(result).toEqual({
      score: 100,
      scorePercentage: 100,
    });
  });
});
