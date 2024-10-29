import { Routes } from '@angular/router';
import { UsuariolistComponent } from './usuariolist/usuariolist.component';
import { UsuariodetailsComponent } from './usuariodetails/usuariodetails.component';

export const routes: Routes = [
  {
    path: 'Usuario',
    component: UsuariolistComponent,
    data: {
      title: 'Lista de Usuarios'
    }
  },
  {
    path: 'Usuario/new',
    component: UsuariodetailsComponent,
    data: {
      title: 'Novo Usuario'
    }
  },
  {
    path: 'Usuario/edit/:id',
    component: UsuariodetailsComponent,
    data: {
      title: 'Editar Usuario'
    }
  }
];
