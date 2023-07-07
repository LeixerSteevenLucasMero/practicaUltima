import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    //comentario prueba
    return 'Hello World!';
  }
}
