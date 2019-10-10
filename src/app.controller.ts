import { Controller, Body, Post, HttpStatus } from '@nestjs/common';
import { ApiResponse} from '@nestjs/swagger';
import { AppService } from './app.service';
import { TestDTO } from './testDTO';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Successfully logged in.'})
  async login(@Body() auth: TestDTO): Promise<TestDTO> {
    return this.appService.login(auth);
  }
}
