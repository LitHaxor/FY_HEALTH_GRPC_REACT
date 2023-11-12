import { Injectable } from '@nestjs/common';
import { CalculatorPayloadDto } from './dto/calculator-payload.dto';

@Injectable()
export class CalculatorService {
  calculate(calculatorPayloadDto: CalculatorPayloadDto) {
    return 'This action adds a new calculator';
  }
}
