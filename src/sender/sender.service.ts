import { Injectable } from '@nestjs/common';
import { DataManagerService } from 'src/data-manager/data-manager.service';

@Injectable()
export class SenderService {

    constructor(
        private readonly dataService:DataManagerService
    ){}

    async registerFile(filepath:string){
        console.log('-')
        return await this.dataService.blockCounter(filepath)
    }
}
 