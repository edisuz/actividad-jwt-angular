import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  formLogin = this.fb.group({

    username: [
      '',
      [
        Validators.required
      ]
    ],

    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ]

  });

  ingresar() {

    if (this.formLogin.invalid) {
      return;
    }

    this.authService.login(this.formLogin.value as any)
      .subscribe({
        next: (resp) => {
          console.log(resp);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error(err);
        }
      });

  }

}