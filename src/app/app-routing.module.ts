import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { GalleryAddComponent } from './components/gallery-add/gallery-add.component';
import { GalleryViewComponent } from './components/gallery-view/gallery-view.component';
import { GalleryResolver } from './resolvers/GalleryResolver';
import { GalleryAuthorComponent } from './components/gallery-author/gallery-author.component';
import { UserResolver } from './resolvers/UserResolver';
import { GalleryMyComponent } from './components/gallery-my/gallery-my.component';
import { GuestGuard } from './guards/guest.guard';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/galleries',
    pathMatch: 'full'
  },
  {
    path: 'galleries',
    canActivate: [AuthGuard],
    component: GalleriesComponent
  },
  {
    path: 'galleries/:id',
    canActivate: [AuthGuard],
    component: GalleryViewComponent,
    resolve: {
      gallery: GalleryResolver
    }
  },
  {
    path: 'galleries/:id/author',
    canActivate: [AuthGuard],
    component: GalleryAuthorComponent,
    resolve: {
      user: UserResolver
    }
  },
  {
    path: 'login',
    canActivate: [GuestGuard],
    component: LoginComponent
  },
  {
    path: 'register',
    canActivate: [GuestGuard],
    component: RegisterComponent
  },
  {
    path: 'my-galleries',
    canActivate: [AuthGuard],
    component: GalleryMyComponent
  },
  {
    path: 'search/:term',
    canActivate: [AuthGuard],
    component: SearchPageComponent
  },
  {
    path: 'create',
    canActivate: [AuthGuard],
    component: GalleryAddComponent
  }

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
