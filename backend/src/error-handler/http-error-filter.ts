import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
  } from '@nestjs/common';
  
  @Catch(HttpException)
  export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const context = host.switchToHttp();
      const request = context.getRequest();
      const response = context.getResponse();
      const status = exception.getStatus();
  
      const errorResponse = {
        code: status,
        path: request.url,
        method: request.method,
        message: exception.message + " kera",
      };
      response.status(404).json(errorResponse);
    }
  }
  