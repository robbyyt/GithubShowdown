import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent {

  constructor(private router: Router) { }

  public gotoLogin(): void {
    this.router.navigate(['login']);
  }

}
