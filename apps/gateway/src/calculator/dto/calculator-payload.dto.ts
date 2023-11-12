import { IsNumber } from 'class-validator';

export class CalculatorPayloadDto {
  @IsNumber()
  monthlyIncome: number;

  @IsNumber()
  expenses: number;

  @IsNumber()
  debts: number;

  @IsNumber()
  assets: number;
}
