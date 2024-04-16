import { Injectable } from '@nestjs/common';
import { HttpCustomService } from './providers/http/http.service';

@Injectable()
export class AppService {
  constructor(private readonly HttpService: HttpCustomService) {}

  getHello(): string {
    return 'Server OK';
  }

  Category1Emergency(lat: string, lon: string): number {
    console.log('pasa service 1');
    this.HttpService.Category1EmergencyApiWhatsApp(lat, lon);
    this.HttpService.emergency_category_1_familyApiWhatsApp(lat, lon);
    return 0;
  }

  Category2Emergency(lat: string, lon: string): number {
    console.log('pasa service 2');
    this.HttpService.Category2EmergencyApiWhatsApp(lat, lon);
    return 0;
  }

  Category3Emergency(lat: string, lon: string): number {
    console.log('pasa service 3');
    this.HttpService.Category3EmergencyApiWhatsApp(lat, lon);
    return 0;
  }
}
