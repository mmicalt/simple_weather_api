import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class WeatherService {
  constructor(private httpService: HttpService) {}

  async getWeather(city, apiKey): Promise<AxiosResponse> {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    return this.httpService.get(url).toPromise();
  }
}
