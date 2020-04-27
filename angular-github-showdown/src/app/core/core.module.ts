import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MainContainerComponent } from './pages/landing-page/components';
import { MaterialModule } from '../material/material.module';
import { MainPageComponent } from './pages/main-page/main-page.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    MainContainerComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
  exports: [
    LandingPageComponent
  ]
})
export class CoreModule { }
