import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: '/admin/paciente',
        loadChildren: () => import('./components/paciente/routes').then((m) => m.routes)
      },
      {
        path: 'consulta',
        loadChildren: () => import('./components/consulta/routes').then((m) => m.routes)
      },
      {
        path: 'usuario',
        loadChildren: () => import('./components/usuario/routes').then((m) => m.routes)
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./views/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  { path: '**', redirectTo: 'dashboard' }
];
