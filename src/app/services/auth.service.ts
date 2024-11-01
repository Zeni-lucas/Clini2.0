import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Logindto } from '../models/usuariodtos/logindto';
import { Token } from '../models/usuariodtos/token';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private http = inject(HttpClient);
  private API = 'https://localhost:8000/api/login';

  login(loginData: Logindto): Observable<Token> {
    return this.http.post<Token>(this.API, loginData).pipe(
      tap((tokenResponse: Token) => {
        localStorage.setItem('authToken', tokenResponse.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('authToken');
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
