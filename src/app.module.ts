import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WeatherController } from './weather/weather.controller';
import { WeatherService } from './weather/weather.service';
import { RootController } from './root/root.controller';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [WeatherController, RootController],
  providers: [WeatherService],
})
export class AppModule {}
