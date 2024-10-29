import { Routes } from '@angular/router';
import { PacientelistComponent } from './pacientelist/pacientelist.component';
import { PacientedetailsComponent } from './pacientedetails/pacientedetails.component';

export const routes: Routes = [
  {
    path: 'pacientes',
    component: PacientelistComponent,
    data: {
      title: 'Lista de Pacientes'
    }
  },
  {
    path: 'pacientes/new',
    component: PacientedetailsComponent,
    data: {
      title: 'Novo Paciente'
    }
  },
  {
    path: 'pacientes/edit/:id',
    component: PacientedetailsComponent,
    data: {
      title: 'Editar Paciente'
    }
  }
];
