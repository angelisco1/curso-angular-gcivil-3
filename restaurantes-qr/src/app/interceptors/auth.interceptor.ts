import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('token')
    if (token) {
      const newHeaders = request.headers.append('Authorization', token)

      const requestWithToken = request.clone({
        headers: newHeaders
      })

      return next.handle(requestWithToken);
    }

    return next.handle(request)
  }
}
