import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SenderModule } from './sender/sender.module';
import { ReceiverModule } from './receiver/receiver.module';
import { AuthModule } from './auth/auth.module';
import { DataManagerModule } from './data-manager/data-manager.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URL'),
      }),
      inject: [ConfigService],
    }),
    SenderModule, ReceiverModule, AuthModule, DataManagerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
