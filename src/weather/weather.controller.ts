import {
  Controller,
  Get,
  Query,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(
    private readonly weatherService: WeatherService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  async getWeather(@Query('city') city) {
    const apiKey = this.configService.get('API_KEY');

    if (!city || !apiKey) {
      const errorMessage = !!city
        ? 'environment variable API_KEY'
        : 'query parameter city';

      throw new HttpException(
        `Bad Request. Missing required ${errorMessage}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const weather = await this.weatherService.getWeather(city, apiKey);

    return weather.data;
  }
}
