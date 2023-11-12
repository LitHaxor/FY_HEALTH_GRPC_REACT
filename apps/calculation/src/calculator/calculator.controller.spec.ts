import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorController } from './calculator.controller';
import { CalculatorService } from './calculator.service';

describe('CalculatorController', () => {
  let controller: CalculatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculatorController],
      providers: [CalculatorService],
    }).compile();

    controller = module.get<CalculatorController>(CalculatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should calculate score', () => {
    const payload = {
      assets: 1000,
      debts: 100,
      expenses: 100,
      monthlyIncome: 1000,
    };
    const result = controller.calculate(payload);
    expect(result).toEqual({
      score: 100,
      scorePercentage: 100,
    });
  });
});
