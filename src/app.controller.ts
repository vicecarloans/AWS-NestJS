import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Server } from './app.interface'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Server {
    return this.appService.getHello();
  }
}
