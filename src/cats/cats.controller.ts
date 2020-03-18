import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { Cat } from './cat.entity';
import { CatsService } from './cats.service';
import { CreateCatDTO } from './catsRequest.dto';
import { InsertResult } from 'typeorm';
import { CatsResponseDTO } from './catsResponse.dto';

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async getAllCats(
    @Query("offset") offset: number = 0,
    @Query("limit") limit: number = 10
  ): Promise<CatsResponseDTO> {
    const data = await this.catsService.findAll(offset, limit);
    return { data }
  }

  @Get(":id")
  async getCatById(@Param("id") id): Promise<Cat> {
    return await this.catsService.findById(id);
  }

  @Post()
  async createCatData(
    @Body() createCatsDTO: CreateCatDTO
  ): Promise<Cat> {
    return await this.catsService.create(createCatsDTO);
  }
}