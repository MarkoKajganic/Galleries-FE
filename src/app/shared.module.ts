import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRowComponent } from './components/gallery-row/gallery-row.component';
import { GalleryService } from './services/gallery.service';
import { AppRoutingModule } from './app-routing.module';
import { GalleryResolver } from './resolvers/GalleryResolver';


@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    providers: [
        GalleryService,
        GalleryResolver
    ],
    declarations: [
        GalleryRowComponent
    ],
    exports: [
        GalleryRowComponent
    ]
})
export class SharedModule { }
