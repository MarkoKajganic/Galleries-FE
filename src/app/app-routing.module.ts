import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GalleriesComponent } from './components/galleries/galleries.component';

const appRoutes: Routes = [
  {
      path: '',
      redirectTo: '/galleries',
      pathMatch: 'full'
  },
  {
    path: 'galleries',
    component: GalleriesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },


];

@NgModule({
  imports: [
      RouterModule.forRoot(
          appRoutes
      )
  ],
  exports: [
      RouterModule
  ]
})export class AppRoutingModule {}