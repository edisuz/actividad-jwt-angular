import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  /* Implementar
  HttpClient
login()
getToken()
logout()
  
  */

  private api = 'https://dummyjson.com/auth';

  constructor() { }



  getToken() {

  }

  logout(): void {

  }


}
