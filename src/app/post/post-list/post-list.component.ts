import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/home/auth.service';

import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Observable<Post[]> | any;

  constructor(private postService: PostsService, public auth:AuthService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    console.log(this);
  }

  delete(id: string) {
    this.postService.delete(id);
  }

}
