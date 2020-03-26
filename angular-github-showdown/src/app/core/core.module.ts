import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MainContainerComponent } from './pages/landing-page/components';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    LandingPageComponent, 
    MainContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class CoreModule { }
