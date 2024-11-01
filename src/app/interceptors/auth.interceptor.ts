// src/app/interceptors/auth.interceptor.ts

import { HttpRequest, HttpHandlerFn, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define o AuthInterceptor como uma função
export const AuthInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const authToken = localStorage.getItem('authToken');

  // Clona a requisição e adiciona o cabeçalho de autorização, se o token existir
  const authReq = authToken
    ? req.clone({ headers: req.headers.set('Authorization', `Bearer ${authToken}`) })
    : req;

  // Continua o fluxo da requisição com o cabeçalho atualizado (ou a requisição original, caso não tenha token)
  return next(authReq);
};
