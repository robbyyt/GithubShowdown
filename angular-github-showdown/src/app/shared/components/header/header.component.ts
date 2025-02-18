import { Component } from '@angular/core';
import { AuthService } from '../../../session/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService: AuthService, private router: Router) { }

  public get authenticated(): boolean {
    return this.authService.isLoggedIn();
  }

  public SignOut() {
    this.authService.SignOut();
  }

  public gotoLogin(): void {
    this.router.navigate(['login']);
  }

  public gotoLanding(): void {
    this.router.navigate(['']);
  }
}
