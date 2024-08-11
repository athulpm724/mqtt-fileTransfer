import { Module } from '@nestjs/common';
import { DataManagerService } from './data-manager.service';

@Module({
  providers: [DataManagerService],
  exports:[DataManagerService]
})
export class DataManagerModule {
}
