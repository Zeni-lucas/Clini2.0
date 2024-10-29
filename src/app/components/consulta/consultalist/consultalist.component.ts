import { Component } from '@angular/core';
import { TableDirective } from '@coreui/angular';

interface IUser {
  id: number;
  nome: string;
  dataAgendamento: string;
  horaInicio: string;
  HoraFim: string;
  status: string;
  color: string;
}

@Component({
  selector: 'app-consultalist',
  standalone: true,
  imports: [TableDirective],
  templateUrl: './consultalist.component.html',
  styleUrl: './consultalist.component.scss'
})



export class ConsultalistComponent {
 

  public users: IUser[] = [
    {
      id: 1,
      nome: 'Mamonha',
      dataAgendamento: '29-10-2024',
      horaInicio: '10:00 AM',
      HoraFim: '12:00 PM',
      status: 'Confirmado',
      color: 'success'
    },
    {
      id: 2,
      nome: 'Pamonha',
      dataAgendamento: '30-10-2024',
      horaInicio: '11:00 AM',
      HoraFim: '01:00 PM',
      status: 'Pendente',
      color: 'warning'
    },
    {
      id: 3,
      nome: 'Broa',
      dataAgendamento: '31-10-2024',
      horaInicio: '09:00 AM',
      HoraFim: '11:00 AM',
      status: 'Cancelado',
      color: 'danger'
    },
    {
      id: 4,
      nome: 'Curau',
      dataAgendamento: '01-11-2024',
      horaInicio: '08:00 AM',
      HoraFim: '10:00 AM',
      status: 'Confirmado',
      color: 'primary'
    },
    {
      id: 5,
      nome: 'Canjica',
      dataAgendamento: '02-11-2024',
      horaInicio: '02:00 PM',
      HoraFim: '04:00 PM',
      status: 'Confirmado',
      color: 'info'
    },
    {
      id: 6,
      nome: 'Bolo de Milho',
      dataAgendamento: '03-11-2024',
      horaInicio: '03:00 PM',
      HoraFim: '05:00 PM',
      status: 'Confirmado',
      color: 'success'
    },
    {
      id: 7,
      nome: 'Cuscuz',
      dataAgendamento: '04-11-2024',
      horaInicio: '12:00 PM',
      HoraFim: '02:00 PM',
      status: 'Pendente',
      color: 'secondary'
    },
    {
      id: 8,
      nome: 'Pé de Moleque',
      dataAgendamento: '05-11-2024',
      horaInicio: '10:00 AM',
      HoraFim: '12:00 PM',
      status: 'Cancelado',
      color: 'warning'
    },
    {
      id: 9,
      nome: 'Paçoca',
      dataAgendamento: '06-11-2024',
      horaInicio: '01:00 PM',
      HoraFim: '03:00 PM',
      status: 'Cancelado',
      color: 'danger'
    }
  ];
}
