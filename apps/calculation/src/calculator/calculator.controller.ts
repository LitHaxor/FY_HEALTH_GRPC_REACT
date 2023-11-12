import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CalculatorService } from './calculator.service';
import { CalculatorPayloadDto } from './dto/calculator-payload.dto';

@Controller()
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @GrpcMethod('CalculatorService', 'FinancialCalculator')
  calculate(data: CalculatorPayloadDto) {
    return this.calculatorService.calculate(data);
  }
}
