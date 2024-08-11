import { Controller, Get, Param } from '@nestjs/common';
import { SenderService } from './sender.service';

@Controller('sender')
export class SenderController {

    constructor(
        private readonly senderService:SenderService
    ){}


    @Get('/:path')
    async registerFile(@Param('path')path:string):Promise<any>{
        return await this.senderService.registerFile(path);
    }
}
