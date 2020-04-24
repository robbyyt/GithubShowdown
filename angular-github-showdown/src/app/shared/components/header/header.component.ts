import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../session/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public get authenticated(): boolean {
    return this.authService.isLoggedIn();
  }
}
