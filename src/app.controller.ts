import { Controller, Get, Post, Req } from "@nestjs/common";
import { AppService } from './app.service';
import { request } from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/Category1Emergency")
  Category1Emergency(@Req() req: Request): void {
    console.log(req.body)
    this.appService.Category1Emergency();
  }

  @Post("/Category1EmergencyFamily")
  Category1EmergencyFamily(@Req() req: Request): void {
    console.log(req.body)
    this.appService.Category1EmergencyFamily();
  }

  @Post("/Category2Emergency")
  Category2Emergency(@Req() req: Request): void {
    console.log(req.body)
    this.appService.Category2Emergency();
  }

  @Post("/Category3Emergency")
  Category3Emergency(@Req() req: Request): void {
    console.log(req.body)
    this.appService.Category3Emergency();
  }
}
