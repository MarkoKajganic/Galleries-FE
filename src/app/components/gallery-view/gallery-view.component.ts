import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/gallery.model';
import { GalleryService } from '../../services/gallery.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
})
export class GalleryViewComponent implements OnInit {

  private gallery: Gallery;

  constructor(private galleryService: GalleryService,
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.data
    .subscribe((data: {gallery: Gallery}) => {
      this.gallery = data.gallery;
    })


    // this.galleryService.getGalleryById(this.gallery.id).subscribe(data => {
    //   this.gallery = data;
    // }, (err: HttpErrorResponse) => {
    //   alert(`Backend returned code ${err.status} with message: ${err.error}`);
    // });


  }



}
