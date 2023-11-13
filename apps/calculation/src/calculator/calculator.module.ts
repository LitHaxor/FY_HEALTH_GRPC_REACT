import { Module } from '@nestjs/common';
import { CalculatorServiceGrpc } from './calculator.service';
import { CalculatorController } from './calculator.controller';

@Module({
  controllers: [CalculatorController],
  providers: [CalculatorServiceGrpc],
})
export class CalculatorModule {}
