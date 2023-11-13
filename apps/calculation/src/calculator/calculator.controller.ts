import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CalculatorServiceGrpc } from './calculator.service';
import { CalculatorPayloadDto } from './dto/calculator-payload.dto';

@Controller()
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorServiceGrpc) {}

  @GrpcMethod('CalculatorService', 'financialCalculator')
  financialCalculator(data: CalculatorPayloadDto) {
    return this.calculatorService.financialCalculator(data);
  }
}
