import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();



// In NestJS, there are:
// app - the actual web server. Created from a module.
// module - container that has all of the controllers and providers the app will need
// controllers - where routes are defined.
// providers - any utility class.