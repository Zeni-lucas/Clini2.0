import { Routes } from '@angular/router';
import { CalendarComponent} from './calendar.component'

export const routes: Routes = [
  {
    path: '',
    component: CalendarComponent,
    data: {
      title:"Agendamentos"
    }
  }
];
