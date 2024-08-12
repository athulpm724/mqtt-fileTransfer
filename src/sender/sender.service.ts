import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataManagerService } from 'src/data-manager/data-manager.service';

@Injectable()
export class SenderService {

    constructor(
        private readonly dataService:DataManagerService
    ){}

    async registerFile(file:Express.Multer.File){

        // validate file

        const status=await this.dataService.validateFile(file)

        // create metaData for file

        if(!status){
            throw new HttpException('invalid File',400)
        }

        const metaData=await this.dataService.createMetaData(file)
        return metaData // for testing

        // store metaData and fileData in DB
        
    }
}
 