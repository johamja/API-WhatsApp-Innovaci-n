import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/Category1Emergency')
  Category1Emergency(@Req() req: Request): number {
    console.log('pasa controller 1');
    return this.appService.Category1Emergency(req.body.lat, req.body.lon);
  }

  @Post('/Category2Emergency')
  Category2Emergency(@Req() req: Request): number {
    console.log('pasa controller 2');
    return this.appService.Category2Emergency(req.body.lat, req.body.lon);
  }

  @Post('/Category3Emergency')
  Category3Emergency(@Req() req: Request): number {
    console.log('pasa controller 3 ' + req.body.hola);
    return this.appService.Category3Emergency(req.body.lat, req.body.lon);
  }
}
