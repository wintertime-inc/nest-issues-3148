import { Injectable } from '@nestjs/common';
import { TestDTO } from './testDTO';

@Injectable()
export class AppService {
  login(auth: TestDTO): TestDTO {
    return auth;
  }
}
