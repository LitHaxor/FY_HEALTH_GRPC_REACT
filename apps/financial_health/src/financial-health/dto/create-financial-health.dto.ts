import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFinancialHealthDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number; // Assuming userId is a number, aligning with the protobuf definition

  @IsNumber()
  @IsNotEmpty()
  score: number;

  @IsNumber()
  @IsNotEmpty()
  monthlyIncome: number;

  @IsNumber()
  @IsNotEmpty()
  expenses: number;

  @IsNumber()
  @IsNotEmpty()
  debts: number;

  @IsNumber()
  @IsNotEmpty()
  assets: number;
}
