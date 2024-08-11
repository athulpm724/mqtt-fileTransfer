import { Test, TestingModule } from '@nestjs/testing';
import { DataManagerService } from './data-manager.service';

describe('DataManagerService', () => {
  let service: DataManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataManagerService],
    }).compile();

    service = module.get<DataManagerService>(DataManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
