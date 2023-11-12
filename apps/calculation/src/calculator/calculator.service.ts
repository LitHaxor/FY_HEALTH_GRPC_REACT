import { Injectable } from '@nestjs/common';
import { CalculatorPayloadDto } from './dto/calculator-payload.dto';

@Injectable()
export class CalculatorService {
  calculate(data: CalculatorPayloadDto) {
    const { assets, debts, expenses, monthlyIncome } = data;

    const netIncome = monthlyIncome - expenses;
    const debtToIncomeRatio = debts / monthlyIncome;
    const assetRatio = assets / debts;
    const score = netIncome * debtToIncomeRatio * assetRatio;
    const scorePercentage = Math.min(Math.max(score, 0), 100);
    const scoreRounded = Math.round(scorePercentage);
    return {
      score: scoreRounded,
      scorePercentage: scorePercentage,
    };
  }
}
