import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvidersModule } from './providers/providers.module';
import { HttpCustomService } from './providers/http/http.service';

@Module({
  imports: [ProvidersModule],
  controllers: [AppController],
  providers: [AppService, HttpCustomService],
})
export class AppModule {}
