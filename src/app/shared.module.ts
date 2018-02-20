import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRowComponent } from './components/gallery-row/gallery-row.component';
import { GalleryService } from './services/gallery.service';


@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        GalleryService
    ],
    declarations: [
        GalleryRowComponent
    ],
    exports: [
        GalleryRowComponent
    ]
})
export class SharedModule { }
