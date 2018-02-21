import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/gallery.model';
import { GalleryService } from '../../services/gallery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery-add',
  templateUrl: './gallery-add.component.html',
})
export class GalleryAddComponent implements OnInit {

  public gallery: Gallery = new Gallery;

  constructor(private galleryService: GalleryService,
              private router: Router) { }

  ngOnInit() {
  }

  submit() {
   
    this.galleryService.addGallery(this.gallery).subscribe(() => {
        this.router.navigateByUrl('/');
    });
}


}
