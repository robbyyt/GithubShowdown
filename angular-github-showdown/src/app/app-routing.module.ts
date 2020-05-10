import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './core/pages/landing-page/landing-page.component';
import { LoginComponent } from './session/pages/login/login.component';
import { MainPageComponent } from './core/pages/main-page/main-page.component';
import { NonAuthGuard } from './session/guards/non-auth.guard';
import { AuthGuard } from './session/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LandingPageComponent,
        canActivate: [NonAuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
      },
      {
        path: 'main',
        component: MainPageComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
