import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRowComponent } from './components/gallery-row/gallery-row.component';
import { GalleryService } from './services/gallery.service';
import { AppRoutingModule } from './app-routing.module';
import { GalleryResolver } from './resolvers/GalleryResolver';
import { UserResolver } from './resolvers/UserResolver';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';


@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    providers: [
        GalleryService,
        GalleryResolver,
        UserResolver,
        AuthGuard,
        GuestGuard

    ],
    declarations: [
        GalleryRowComponent
    ],
    exports: [
        GalleryRowComponent
    ]
})
export class SharedModule { }
