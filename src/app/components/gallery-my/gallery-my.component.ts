import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Gallery } from '../../models/gallery.model';

@Component({
  selector: 'app-gallery-my',
  templateUrl: './gallery-my.component.html',
})
export class GalleryMyComponent implements OnInit {

  constructor(private galleryService: GalleryService,
              private route: ActivatedRoute,
              private router: Router) { }

  private galleries: Gallery;
  private id;

  ngOnInit() {
    let user = window.localStorage.getItem('user');
    let userObject = JSON.parse(user);
    //console.log(userObject.id);
    let id = userObject.id;

    this.galleryService.searchGalleriesByUserId(id).subscribe(data => {
      this.galleries = data;
      this.id = id;
  }, (id) => {
      alert('There are no galeries with id: ' + id);
      this.router.navigate(['galleries']);
    });

  }

}
