import { Routes } from '@angular/router';
import { UsuariolistComponent } from './usuariolist/usuariolist.component';
import { UsuariodetailsComponent } from './usuariodetails/usuariodetails.component';

export const routes: Routes = [
  {
    path: 'Usuarios',
    component: UsuariolistComponent,
    data: {
      title: 'Lista de Usuarios'
    }
  },
  {
    path: 'Usuarios/new',
    component: UsuariodetailsComponent,
    data: {
      title: 'Novo Usuario'
    }
  },
  {
    path: 'Usuarios/edit/:id',
    component: UsuariodetailsComponent,
    data: {
      title: 'Editar Usuario'
    }
  }
];
