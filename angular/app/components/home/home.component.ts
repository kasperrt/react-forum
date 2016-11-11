import { Component, OnInit } from '@angular/core';

/*Importing post component and service*/
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

/*When the app loads, we use the PostsService to load posts using the getPosts method*/
export class HomeComponent implements OnInit {
    posts: Post[];
    constructor(private _postsService: PostsService) {
    };

    ngOnInit() {
        this.posts = this._postsService.getPosts();
    };
}
