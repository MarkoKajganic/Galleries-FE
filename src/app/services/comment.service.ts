import { Injectable } from '@angular/core';
import { Comment } from './../models/comment.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, Observer } from 'rxjs/Rx';


@Injectable()
export class CommentService {

    //private comments: Comment[] = [];

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) { }

    //OVO SVE NIDJE VEZE SA OVAKIM KOMENT PRIKAZOM
    public addComment(comment: Comment) {
        
            // this.http.post('http://localhost:8000/api/comments', {
            //     body: comment.body,
            //     gallery_id: gallery.id,
            //     user_id: user.id
            // });
    }


    // public addComment(comment: Comment) {
    //     return new Observable((o: Observer<any>) => {
    //         this.http.post('http://localhost:8000/api/comments', {
    //             body: comment.body,
    //             gallery_id: gallery.id,
    //             user_id: user.id
    //         });
    //         },
    //          {
    //                 headers: this.authService.getRequestHeaders()
    //             }).subscribe((comments: any) => {
    //                 const comment = new Comment(
    //                     comments.body,
    //                     comments.gallery_id,
    //                     comments.user_id
                
    //                     );
    //                 this.comments.push(comment);
    //                 o.next(comment);
    //                 return o.complete();
    //             }, (err: HttpErrorResponse) => {
    //                 alert(`Backend returned code ${err.status} with message: ${err.error}`);
    //             }
    //          );
    //     });
    //  }

  
}
