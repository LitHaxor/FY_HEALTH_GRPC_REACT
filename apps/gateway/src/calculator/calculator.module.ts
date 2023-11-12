import { Module } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculatorController } from './calculator.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CALCULATOR_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'calculator',
          protoPath: 'apps/calculation/src/calculator/calculator.proto',
        },
      },
    ]),
  ],
  controllers: [CalculatorController],
  providers: [CalculatorService],
})
export class CalculatorModule {}
