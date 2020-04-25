import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/session/services/auth.service';

@Component({
  selector: 'app-login-main-container',
  templateUrl: './login-main-container.component.html',
  styleUrls: ['./login-main-container.component.scss']
})
export class LoginMainContainerComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
}
