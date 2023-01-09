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
          'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzBiN2NiOGUyZmNjZTUyMzFlZTVjZDE3Y2E2M2NiMSIsInN1YiI6IjYxN2MyMDRiZDM4OGFlMDA2MTE5Y2Y5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MlSfxdl-EDDJvj_F64TsiIlmSQ64rKouf7Orz_NVxKo'
        ),
      });
    } else {
      // API v3
      req = request.clone({
        params: request.params.append(
          'api_key',
          '730b7cb8e2fcce5231ee5cd17ca63cb1'
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
