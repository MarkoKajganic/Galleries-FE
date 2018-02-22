import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/gallery.model';
import { GalleryService } from '../../services/gallery.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-gallery-author',
  templateUrl: './gallery-author.component.html',
})
export class GalleryAuthorComponent implements OnInit {

  private gallery: Gallery;
  private galleries: Gallery;
  private id;

  constructor(private galleryService: GalleryService,
              private route: ActivatedRoute,
              private router: Router) { }

            
  ngOnInit() {
    this.route.data
    .subscribe((data) => {
      this.gallery = data.user;
    })
  
      let id = this.gallery.user_id
      this.galleryService.searchGalleriesByUserId(id).subscribe(data => {
          this.galleries = data;
          this.id = id;
      }, (id) => {
          alert('There are no galeries with id: ' + id);
          this.router.navigate(['galleries']);
      });
  }


}
