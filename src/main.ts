import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyMiddleware } from './my.middleware';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true
      }),
  );
  app.use(new MyMiddleware().use);
    const options = new DocumentBuilder()
        .addBearerAuth()
        .setTitle('Bug')
        .setDescription('#3148')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
