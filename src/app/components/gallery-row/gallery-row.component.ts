import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Gallery } from '../../models/gallery.model';

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

  constructor() { }

  ngOnInit() {
    //console.log(this.gallery)
  }

}
