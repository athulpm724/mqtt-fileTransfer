import { HttpException, HttpStatus, Injectable, NotAcceptableException } from '@nestjs/common';
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
        chunkSize:number,
        // hashContent  :string[]
    }>{

        const chunkSize=1000000

        const fileSize=file.size;
        const fileType=file.mimetype;
        const chunks=Math.ceil(fileSize/chunkSize)  // 1000000 Byte  = 1MegaByte
        const hashContent=await this.hashContent(file.buffer,chunks,chunkSize,fileSize)

        return {
            fileSize:fileSize,
            fileType:fileType,
            chunks:chunks,
            chunkSize:chunkSize,
            // hashContent:hashContent
        } 
    } 

    async hashContent(buffer,chunks,chunkSize,fileSize){
        let hashData=new Map(); // hash map to store all the individual chunks of data and its corresponding hashcode

        if(chunks<=0){
            throw new HttpException(`unable to hashData : chunk size=${chunks}`,400)
        }

        let splitChunksArray=[]
        console.log(buffer.length)
        for(let i=0;i<fileSize;i+=chunkSize){
            const slicedChunk=buffer.slice(i,chunkSize+i)
            splitChunksArray.push(slicedChunk)
        }

        console.log(splitChunksArray.join().length)

        return splitChunksArray

        

    }

    
    
}
