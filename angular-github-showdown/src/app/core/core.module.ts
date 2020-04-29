import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MainContainerComponent } from './pages/landing-page/components';
import { MaterialModule } from '../material/material.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MainPageContentComponent } from './pages/main-page/components/main-page-content/main-page-content.component';
import { ProfileDialogComponent } from './pages/main-page/components/profile-dialog/profile-dialog.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    MainContainerComponent,
    MainPageComponent,
    MainPageContentComponent,
    ProfileDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
  exports: [
    LandingPageComponent,
    MainPageComponent
  ]
})
export class CoreModule { }
