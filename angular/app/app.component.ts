import { Component } from '@angular/core'; /*Lets us make a component*/

/*Services imported to display other content*/
import { PostsService } from './services/posts/posts.service';
import { ProfileService } from './services/profile/profile.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers: [ProfileService, PostsService], /*These give us the Profile and Post views*/
})
export class AppComponent {
    title = 'How to: Adult';
    /*For all other content, we use the providers mentioned above to load*/
}
