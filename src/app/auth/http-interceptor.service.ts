import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const meuhttpInterceptor: HttpInterceptorFn = (request, next) => {

  const router = inject(Router);
  
  // Recuperando o token do localStorage
  const tokenObject = localStorage.getItem('token');
  
  // Verificando se o token é um JSON e extraindo o token real
  let token: string | null = null;
  if (tokenObject) {
    try {
      const parsedToken = JSON.parse(tokenObject);
      token = parsedToken.token; // Acessa o campo 'token' dentro do JSON
    } catch (e) {
      console.error('Erro ao parsear o token:', e);
    }
  }

  // Se o token existir e a URL não for a de login, adicionar o token ao cabeçalho
  if (token && !router.url.includes('/login')) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}` // Usando template literal para facilitar leitura
      },
    });
  }

  // Executando a requisição e tratando os erros
  return next(request).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        // Tratar erros de autenticação (401) e autorização (403)
        if (err.status === 401 || err.status === 403) {
          alert(`Erro ${err.status} - Você não tem permissão para acessar esta página.`);
          // Redireciona para a página de login
          router.navigate(['/login']);
        } else {
          console.error('Erro HTTP:', err); // Log do erro para outros tipos de falhas
        }
      } else {
        console.error('Ocorreu um erro inesperado:', err); // Erros inesperados
      }

      // Retorna o erro para que o fluxo continue
      return throwError(() => err);
    })
  );
};
