import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port=3000
  await app.listen(port).then(()=>{
    console.log('---------------------')
    console.log(`PORT RUNNING @ ${port}`)
    console.log('---------------------')
  });
}
bootstrap();
