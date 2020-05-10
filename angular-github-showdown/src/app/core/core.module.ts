import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MainContainerComponent } from './pages/landing-page/components';
import { MaterialModule } from '../material/material.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MainPageContentComponent } from './pages/main-page/components/main-page-content/main-page-content.component';
import { ProfileDialogComponent } from './pages/main-page/components/profile-dialog/profile-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReposFormComponent } from './pages/main-page/components/repos-form/repos-form.component';
import { RepoContainerComponent } from './pages/main-page/components/repo-container/repo-container.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    MainContainerComponent,
    MainPageComponent,
    MainPageContentComponent,
    ProfileDialogComponent,
    ReposFormComponent,
    RepoContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    LandingPageComponent,
    MainPageComponent
  ]
})
export class CoreModule { }
