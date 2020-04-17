import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getHealth(): {health: string} {
    return {health: 'ok'}
  }
}
