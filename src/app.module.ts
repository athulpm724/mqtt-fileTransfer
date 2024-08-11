import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SenderModule } from './sender/sender.module';
import { ReceiverModule } from './receiver/receiver.module';
import { AuthModule } from './auth/auth.module';
import { DataManagerModule } from './data-manager/data-manager.module';

@Module({
  imports: [SenderModule, ReceiverModule, AuthModule, DataManagerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
