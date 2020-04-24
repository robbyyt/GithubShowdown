import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { LoginMainContainerComponent } from './pages/login/components/login-main-container/login-main-container.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [LoginComponent, LoginMainContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ]
})
export class SessionModule { }
