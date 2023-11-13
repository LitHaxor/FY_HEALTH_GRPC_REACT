import { Injectable } from '@nestjs/common';
import { CalculatorPayloadDto } from './dto/calculator-payload.dto';

@Injectable()
export class CalculatorServiceGrpc {
  financialCalculator(data: CalculatorPayloadDto) {
    const { assets, debts, expenses, monthlyIncome } = data;

    const netIncome = monthlyIncome - expenses;
    const debtToIncomeRatio = debts / monthlyIncome;
    const assetRatio = assets / debts;
    const score = netIncome * debtToIncomeRatio * assetRatio;
    const scorePercentage = Math.min(Math.max(score, 0), 100);
    const scoreRounded = Math.round(scorePercentage);

    const result = {
      score: scoreRounded,
      scorePercentage,
    };

    return result;
  }
}
