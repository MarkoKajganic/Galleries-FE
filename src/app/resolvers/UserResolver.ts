import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { GalleryService } from '../services/gallery.service';


@Injectable()
export class UserResolver implements Resolve<any> {

    constructor(private galleryService: GalleryService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        let id = parseInt(route.paramMap.get('id'));

        let gallery =  this.galleryService.getGalleryById(id);

        return gallery;
    }
}
