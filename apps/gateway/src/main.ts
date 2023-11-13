import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);
  app.enableCors({
    origin: ['localhost:3000'],
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  // Documentations
  const options = new DocumentBuilder()
    .setTitle('')
    .setDescription('')
    .setBasePath('api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap().then(() => {
  Logger.debug(`API Gateway is running on: http://localhost:3000/docs`);
});
