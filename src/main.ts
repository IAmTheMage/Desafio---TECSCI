import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilita a validação global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,         // Remove propriedades não declaradas no DTO
    forbidNonWhitelisted: true, // Retorna erro se propriedades extras forem enviadas
    transform: true,          // Transforma automaticamente para o tipo especificado no DTO
  }));

  const config = new DocumentBuilder()
    .setTitle('STEMIS Power Plants API/Reference')
    .setDescription('STEMIS Power Plants API/Reference')
    .setVersion('1.0')
    .addTag('plants')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(3000);
}
bootstrap();
