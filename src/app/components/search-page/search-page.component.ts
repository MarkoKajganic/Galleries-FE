import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/gallery.model';
import { GalleryService } from '../../services/gallery.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent implements OnInit {

  private galleries: Gallery;
  private term;

  constructor(private galleryService: GalleryService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
   
        let term = this.route.snapshot.paramMap.get('term');
        this.galleryService.searchGalleriesByTerm(term).subscribe(data => {
            this.galleries = data;
            this.term = term;
        }, (term) => {
            alert('There are no galeries with searched term: ' + term);
            this.router.navigate(['galleries']);
        });

    }
  }