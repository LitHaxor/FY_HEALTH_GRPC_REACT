import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'user',
        protoPath: join(__dirname, '..' + 'proto/user.proto'),
        loader: {
          includeDirs: [join(__dirname, '..' + 'proto')],
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
