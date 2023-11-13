import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CalculatorPayloadDto {
  @ApiProperty({
    description: 'Monthly Income',
    example: 1000,
  })
  @IsNumber()
  monthlyIncome: number;

  @ApiProperty({
    description: 'Monthly Expenses',
    example: 1000,
  })
  @IsNumber()
  expenses: number;

  @ApiProperty({
    description: 'Monthly Debts',
    example: 1000,
  })
  @IsNumber()
  debts: number;

  @ApiProperty({
    description: 'Monthly Assets',
    example: 1000,
  })
  @IsNumber()
  assets: number;
}
