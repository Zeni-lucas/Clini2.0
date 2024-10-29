import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { Logindto } from 'src/app/models/usuariodtos/logindto';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle, ReactiveFormsModule]
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData: Logindto = {
        email: this.loginForm.get('email')?.value,
        senha: this.loginForm.get('password')?.value
      };
  
      this.usuarioService.login(loginData).subscribe({
        next: (response) => { 
          console.log('Login bem-sucedido:', response);
          this.router.navigate(['/admin']);
        },
        error: (error) => {
          console.error('Erro de login:', error);
          alert('Login falhou. Verifique suas credenciais.');
        }
      });
    } else {
      console.log('Formulário inválido:', this.loginForm); 
    }
  }

}
