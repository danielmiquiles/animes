import { LoginService } from './login.service';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from './../login/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: Login = {
    email: '',
    senha: '',
  };

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {}

  cadastro(): void {
    this.router.navigate(['/cadastro']);
  }

  logar(): void {
    this.loginService.logar(this.login).subscribe(() => {
      console.log(this.login);
      
    });
  }
}
