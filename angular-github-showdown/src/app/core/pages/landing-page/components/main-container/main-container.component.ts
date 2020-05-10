import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public gotoLogin(): void {
    console.log('here');
    
    this.router.navigate(['login']);
  }

}
