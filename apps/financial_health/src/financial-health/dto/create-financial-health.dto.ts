import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFinancialHealthDto {
  @ApiProperty({
    description: 'User ID',
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    description: 'Score',
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  score: number;

  @ApiProperty({
    description: 'Monthly Income',
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  monthlyIncome: number;

  @ApiProperty({
    description: 'Monthly Expenses',
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  expenses: number;

  @ApiProperty({
    description: 'Debts',
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  debts: number;

  @ApiProperty({
    description: 'Assets',
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  assets: number;
}
