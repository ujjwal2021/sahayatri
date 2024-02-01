import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    throw new HttpException("kera khau", HttpStatus.BAD_REQUEST);
  }
}
