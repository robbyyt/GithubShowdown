import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/session/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileDialogComponent } from './components/profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  @ViewChild('dialogButton') private dialogButton: ElementRef;

  constructor(public authService: AuthService, public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ProfileDialogComponent, {
      data: {
        ...this.authService.userData,
      }
    });
  }

}
