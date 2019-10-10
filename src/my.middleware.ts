import { Injectable, NestMiddleware } from '@nestjs/common';
@Injectable()
export class MyMiddleware implements NestMiddleware {
    use(req, res, next: Function) {
        console.log('Using MyMiddleware as example, req.body:');
        console.log(req.body);
        next();
    }
}
