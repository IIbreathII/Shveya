import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json, urlencoded, static as serveStatic } from 'express';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import cookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Настройка Swagger
  const config = new DocumentBuilder()
    .setTitle('My Project API')
    .setDescription('API Documentation for My Project')
    .setVersion('1.0')
    .addTag('Markers')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Настройки Body Parser
  app.use(json({ limit: '10mb' }));
  app.use(urlencoded({ extended: true, limit: '10mb' }));

  // Включение CORS
  app.enableCors({
    origin: 'http://localhost:3000', // Укажи фронтенд-URL
    credentials: true, // Разрешает куки
  });

  // Включаем глобальную валидацию и преобразование типов
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));

  // Раздача статических файлов (доступ к /uploads)
  app.use('/uploads', serveStatic(join(__dirname, '..', 'uploads')));

  // Подключение cookie-parser для работы с куками
  app.use(cookieParser());

  const PORT = configService.get<number>('PORT') || 3007;
  console.log(`🚀 Server running on port ${PORT}`);

  await app.listen(PORT);
}

bootstrap();
