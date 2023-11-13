import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'financialhealth',
        // protoPath: join(__dirname, '/proto/financial_health.proto'),
        protoPath:
          '/Users/lithasan/Desktop/Projects/FY_Health/finalcial_health/apps/financial_health/src/proto/financial_health.proto',
      },
    },
  );
  await app.listen();
}
bootstrap();
