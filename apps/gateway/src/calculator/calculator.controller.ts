import { Controller, Post, Body } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculatorPayloadDto } from './dto/calculator-payload.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Calculator')
@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post()
  calculate(@Body() calculatorPayloadDto: CalculatorPayloadDto) {
    return this.calculatorService.calculate(calculatorPayloadDto);
  }
}
