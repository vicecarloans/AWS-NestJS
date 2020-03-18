import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './cat.entity';
import { Repository, InsertResult } from 'typeorm';
import { CreateCatDTO } from './catsRequest.dto';

@Injectable()
export class CatsService {
    constructor(@InjectRepository(Cat) private catsRepository: Repository<Cat>){}

    findAll(skip: number, take: number): Promise<Cat[]> {
        return this.catsRepository.find({
          order: {
            id : "ASC"
          },
          skip,
          take
        });
    }

    findById(id: string): Promise<Cat>{
        return this.catsRepository.findOne(id);
    }

    async create(createCatDTO: CreateCatDTO): Promise<Cat>{
        const cat = this.catsRepository.create({
          ...createCatDTO
        });
        return await this.catsRepository.save(cat);
    }
}
