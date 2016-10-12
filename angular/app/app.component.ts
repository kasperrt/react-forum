import { Component } from '@angular/core';
import { ProfileService } from './services/profile/profile.service'

export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
    providers: [ProfileService]
})
export class AppComponent {
    title = 'How to: Adult';
}
