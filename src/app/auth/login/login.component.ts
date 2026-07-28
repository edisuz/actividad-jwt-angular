import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {

  /* Implementar:
  
  FormBuilder
  Validators
  AuthService
  Router
  login()
  */

  constructor() { }


  formLogin = ''

  ingresar() {

  }

}