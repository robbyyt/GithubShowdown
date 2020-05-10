import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/session/services/auth.service';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss']
})
export class ProfileDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private authService: AuthService) { }

  public signout(): void {
    this.authService.SignOut();
  }
}
