import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WeatherController } from './weather/weather.controller';
import { WeatherService } from './weather/weather.service';
import { HealthController } from './health/health.controller';
import { HealthService } from './health/health.service';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [WeatherController, HealthController],
  providers: [WeatherService, HealthService],
})
export class AppModule {}
