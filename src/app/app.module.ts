import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { GalleryService} from './services/gallery.service';
import { SearchModule } from './search.module';
import { SharedModule } from './shared.module';
import { GalleryViewComponent } from './components/gallery-view/gallery-view.component';
import { GalleryAddComponent } from './components/gallery-add/gallery-add.component';
import { GalleryAuthorComponent } from './components/gallery-author/gallery-author.component';
import { GalleryMyComponent } from './components/gallery-my/gallery-my.component';
import { CommentsFormComponent } from './components/comments-form/comments-form.component';
import { CommentService } from './services/comment.service';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    GalleriesComponent,
    GalleryViewComponent,
    GalleryAddComponent,
    GalleryAuthorComponent,
    GalleryMyComponent,
    CommentsFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    SearchModule,
    SharedModule
  ],
  providers: [
    AuthService,
    GalleryService,
    CommentService
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
