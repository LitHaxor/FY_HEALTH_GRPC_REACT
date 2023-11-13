import { Module } from '@nestjs/common';
import { FinalcialHealthService } from './finalcial_health.service';
import { FinalcialHealthController } from './finalcial_health.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'FINANCIAL_HEALTH_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'financialhealth',
          loader: { keepCase: true },
          protoPath: join(
            __dirname + '/finalcial_health/proto/financial_health.proto',
          ),
        },
      },
    ]),
  ],
  controllers: [FinalcialHealthController],
  providers: [FinalcialHealthService],
})
export class FinalcialHealthModule {}
