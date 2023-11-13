import { Module } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculatorController } from './calculator.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import path from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CALCULATOR_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'calculator',
          loader: { keepCase: true },
          protoPath:
            '/Users/lithasan/Desktop/Projects/FY_Health/finalcial_health/apps/gateway/src/calculator/proto/calculator.proto',
        },
      },
    ]),
  ],
  controllers: [CalculatorController],
  providers: [CalculatorService],
})
export class CalculatorModule {}
