import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionDataService } from '../services/session-data.service';
import { AuthHttpService } from './auth-http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authHttpService: AuthHttpService, private SessionDataService: SessionDataService, private router: Router) { }

  login() {
    this.authHttpService.login().subscribe(
      {
        next: (token) => {
          this.SessionDataService.saveUserToken(token);
          this.router.navigate(['/home']);
        }
      }
    );
  }
}
