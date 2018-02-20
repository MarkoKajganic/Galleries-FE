import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { GalleryService } from '../../services/gallery.service';
import { Gallery } from './../../models/gallery.model';


@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
})
export class GalleriesComponent implements OnInit {

  private galleries: Gallery[] = [];

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.galleryService.getGalleries().subscribe(data => {
      this.galleries = data;
    }, (err: HttpErrorResponse) => {
      alert(`Backend returned code ${err.status} with message: ${err.error}`);
    });
}


}
