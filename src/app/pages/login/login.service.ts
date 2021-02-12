import { Login } from './login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8080/login';

  logar(login:Login): Observable<String> {
    return this.http.post<any>(this.baseUrl, login);
  }
}
