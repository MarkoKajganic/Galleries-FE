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
    path: 'galleries/:id',
    component: GalleryViewComponent,
    resolve: {
      gallery: GalleryResolver
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'search/:term',
    component: SearchPageComponent
  },
  {
    path: 'create',
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
