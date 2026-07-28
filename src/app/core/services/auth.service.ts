import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private api = 'https://dummyjson.com/auth';

  constructor(private http: HttpClient) { }

  login(usuario: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.api}/login`, usuario)
      .pipe(
        tap(resp => {
          localStorage.setItem('token', resp.accessToken);
        })
      );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }


}
