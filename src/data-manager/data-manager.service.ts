import { HttpStatus, Injectable, NotAcceptableException } from '@nestjs/common';
const fs=require('fs')
const path=require('path')

@Injectable()
export class DataManagerService {

    constructor(){}

    async validateFile(file:Express.Multer.File):Promise<boolean>{
        return true
    }

    async createMetaData(file:Express.Multer.File):Promise<{
        fileType:string,
        fileSize:number,
        chunks:number,
    }>{

        const fileSize=file.size;
        const fileType=file.mimetype;
        const chunks=10

        return {
            fileSize:fileSize,
            fileType:fileType,
            chunks:chunks
        }
    }

    async hashContent(chunk,key){

    }

    
    
}
