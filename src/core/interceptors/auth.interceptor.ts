import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let req: HttpRequest<unknown>;
    if (request.url.includes('/4/')) {
      req = request.clone({
        headers: request.headers.append(
          'Authorization',
          'KEY'
        ),
      });
    } else {
      // API v3
      req = request.clone({
        params: request.params.append(
          'api_key',
          'KEY'
        ),
      });
    }
    req = req.clone({
      headers: request.headers.append(
        'Content-Type',
        'application/json;charset=utf-8'
      ),
    });
    return next.handle(req);
  }
}
