import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './core/pages/landing-page/landing-page.component';
import { LoginComponent } from './session/pages/login/login.component';
import { MainPageComponent } from './core/pages/main-page/main-page.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LandingPageComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'main',
        component: MainPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
