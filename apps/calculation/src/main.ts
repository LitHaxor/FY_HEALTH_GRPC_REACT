import { NestFactory } from '@nestjs/core';
import { CalculationModule } from './calculation.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CalculationModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'calculator',
        protoPath: join(__dirname, 'calculator/proto/calculator.proto'),
        loader: {
          includeDirs: [join(__dirname, 'calculator/proto')],
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
