import { Component } from '@angular/core';
import { LoginService } from '../../core/authentication/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor(private loginService: LoginService) { }

  login() {
    this.loginService.login();
  }
}
