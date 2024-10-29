import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: 'admin/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    title: true,
    name: 'Controles de Agendamentos'
  },
  {
    name: 'Pacientes',
    url: 'admin/paciente',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Agendamentos',
    url: 'admin/calendar',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Controles de Usuarios',
    title: true
  },
  {
    name: 'Usuario',
    url: '/base',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Cadastro/Atualizar',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Listar/Remover/Editar',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  
    
];
