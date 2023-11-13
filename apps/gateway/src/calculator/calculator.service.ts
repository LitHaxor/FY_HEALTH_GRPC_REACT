import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CalculatorPayloadDto } from './dto/calculator-payload.dto';
import { ClientGrpc } from '@nestjs/microservices';
import { CalculatorServiceGrpc } from 'apps/calculation/src/calculator/calculator.service';

@Injectable()
export class CalculatorService implements OnModuleInit {
  private calculatorGrpcService: CalculatorServiceGrpc;
  constructor(
    @Inject('CALCULATOR_PACKAGE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.calculatorGrpcService =
      this.client.getService<CalculatorServiceGrpc>('CalculatorService');
  }

  calculate(calculatorPayloadDto: CalculatorPayloadDto) {
    // this grpc will return a observable so we need to subscribe to it
    return this.calculatorGrpcService.financialCalculator(calculatorPayloadDto);
  }
}
