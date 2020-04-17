import { Controller, Get } from '@nestjs/common';

@Controller()
export class RootController {
  @Get()
  RootHandler() {
    return {
      status: 'ok',
      message: 'Success. Go to /weather to see the weather xD',
    };
  }
}
