import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Gallery } from '../../models/gallery.model';
import { AuthService } from '../../services/auth.service';

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

  constructor(private auth: AuthService) { }

  ngOnInit() {
    //console.log(this.gallery)
  }

  public canEdit() {
    return this.auth.isAuthenticated && this.auth.user.id === this.gallery.user_id;
  }
}
