import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));

  const logger = new Logger('Main');
  const configService = new ConfigService();
  if (`.env.${process.env.NODE_ENV.trim()}` === 'development') {
    const config = new DocumentBuilder()
      .setTitle('M example')
      .setDescription('The marketAPI description')
      .setVersion('1.0')
      .addTag('market')
      .addBearerAuth()
      .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, documentFactory);
  }

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  await app.listen(configService.get('PORT'));

  logger.log(`Server running on ${await app.getUrl()}`);
}
bootstrap();
