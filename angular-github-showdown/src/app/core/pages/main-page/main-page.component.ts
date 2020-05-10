import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/session/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileDialogComponent } from './components/profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @ViewChild('dialogButton') private dialogButton: ElementRef;

  constructor(public authService: AuthService, public dialog: MatDialog) { }

  ngOnInit(): void {}

  openDialog() {
    console.log(this.authService.userData);
    this.dialog.open(ProfileDialogComponent, {
      data: {
        ...this.authService.userData,
      }
    });
  }
}
