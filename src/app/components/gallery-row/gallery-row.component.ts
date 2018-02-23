import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Gallery } from '../../models/gallery.model';
import { AuthService } from '../../services/auth.service';
import { GalleryService } from '../../services/gallery.service';
import { Router } from '@angular/router';

@Component({
  selector: '[galleryRow]',
  templateUrl: './gallery-row.component.html',
})
export class GalleryRowComponent implements OnInit {

  private gallery: Gallery;
  
  @Input()
  set galleryRow(gallery: Gallery){
    this.gallery = gallery;
  }

  constructor(private auth: AuthService,
              private galleryService: GalleryService,
              private router: Router) { }

  ngOnInit() {
      
  }

  public canEdit() {   //za prikaz Edit i Delete dugmadi
    return this.auth.isAuthenticated && this.auth.user.id === this.gallery.user_id;
    
  }

  public editGallery() {
    console.log('edit nije jos implementiran');
  }

  public deleteGallery(gallery){
    this.galleryService.deleteGallery(gallery).subscribe();
    this.router.navigate(['/my-galleries']);
  }

}
