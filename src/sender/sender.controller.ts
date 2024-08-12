import { Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { SenderService } from './sender.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('sender')
export class SenderController {

    constructor(
        private readonly senderService:SenderService
    ){}

    @Post('file')
    @UseInterceptors(FileInterceptor('file'))
    async registerFile(@UploadedFile('file') file: Express.Multer.File):Promise<any>{
        return await this.senderService.registerFile(file);
    }
}
    