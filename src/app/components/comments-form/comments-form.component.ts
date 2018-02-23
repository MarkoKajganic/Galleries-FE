import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/comment.model';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
})
export class CommentsFormComponent implements OnInit {

  public comment: Comment = new Comment;
  

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  postComment() {
      this.commentService.addComment(this.comment);
  }

}
