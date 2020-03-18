import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './cat.entity';
import { CatsService } from './cats.service';

@Module({
    imports: [TypeOrmModule.forFeature([Cat])],
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule {};