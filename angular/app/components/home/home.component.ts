import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';
import { PostsService } from '../../services/posts/posts.service';


@Component({
  selector: 'home',
  template: `
    <div id="posts">
      <h2> Posts </h2>
      <div class ="homePosts" *ngFor='let post of posts'>
        {{ post.heading }} - {{ post.content }}
      </div>
    </div>
  `
})
export class HomeComponent implements OnInit{
  posts : Post[];
  constructor(private _postsService : PostsService) {
  };

  ngOnInit() {
    this.posts = this._postsService.getPosts();
  };
}
