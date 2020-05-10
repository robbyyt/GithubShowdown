import { Component } from '@angular/core';
import { AuthService } from 'src/app/session/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-main-container',
  templateUrl: './login-main-container.component.html',
  styleUrls: ['./login-main-container.component.scss']
})
export class LoginMainContainerComponent {

  constructor(private authService: AuthService, private router: Router) { }

  public login(): void {
    this.authService.GithubAuth();
  }
}
