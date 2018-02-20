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
import { GalleryService} from './services/gallery.service'



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    GalleriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    GalleryService,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
