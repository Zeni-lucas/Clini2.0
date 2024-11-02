import { Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle, FormsModule, CommonModule]
})
export class LoginComponent {

  constructor(private router: Router){

  }
  
  username: string = 'usuario@gmail.com';
  password: string = 'admin123';
  

  onSubmit() {
    if (this.username === 'usuario@gmail.com' && this.password === 'admin123') {
      this.router.navigate(['dashboard']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Credenciais inválidas. Por favor, tente novamente.',
        confirmButtonText: 'Ok'
      });
    }
  }
}
