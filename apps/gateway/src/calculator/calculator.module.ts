import { Module } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculatorController } from './calculator.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import path, { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CALCULATOR_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'calculator',
          loader: { keepCase: true },
          protoPath: join(__dirname + '/calculator/proto/calculator.proto'),
        },
      },
    ]),
  ],
  controllers: [CalculatorController],
  providers: [CalculatorService],
})
export class CalculatorModule {}
