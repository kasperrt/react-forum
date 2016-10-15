import { Component } from '@angular/core';
import { PostsService } from './services/posts/posts.service';
import { ProfileService } from './services/profile/profile.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
    providers: [ProfileService, PostsService]
})
export class AppComponent {
    title = 'How to: Adult';
}
