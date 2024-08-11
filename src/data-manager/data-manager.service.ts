import { HttpStatus, Injectable, NotAcceptableException } from '@nestjs/common';
const fs=require('fs')
const path=require('path')

@Injectable()
export class DataManagerService {

    constructor(){}

    async blockCounter(filepath: string): Promise<number> {    
        const absolutePath = await this.validateFilePath(filepath);
        if (!absolutePath) {
            throw new NotAcceptableException("The file path provided does not exist or is not a file");
        }
    
        try {
            const data = await fs.readFile(absolutePath, 'utf8');
            return data.length;
        } catch (error) {
            console.error('Error reading file:', error);
            throw new NotAcceptableException("Error reading the file");
        }
    }

    async validateFilePath(filepath: string): Promise<string | false> {
        
        const absolutePath = path.resolve(filepath);  
        console.log(absolutePath);
        
        try {
            await fs.promises.access(absolutePath);
            
            const stats = await fs.promises.stat(absolutePath);
            if (!stats.isFile()) {
                return false;
            }
            
            return absolutePath;
        } catch (error) {
            console.error('File validation error:', error);
            return false;
        }
    }
}
