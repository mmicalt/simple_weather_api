import { Controller, Get } from '@nestjs/common';

@Controller()
export class RootController {
  @Get()
  RootHandler() {
    return {
      status: 'ok',
      message: 'go to /weather',
    };
  }
}
