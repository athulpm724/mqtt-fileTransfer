import { Module } from '@nestjs/common';
import { SenderController } from './sender.controller';
import { SenderService } from './sender.service';
import { DataManagerModule } from 'src/data-manager/data-manager.module';

@Module({
  imports:[
    DataManagerModule
  ],
  controllers: [SenderController],
  providers: [SenderService]
})
export class SenderModule {}
