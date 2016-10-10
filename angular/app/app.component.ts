import { Component } from '@angular/core';
export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `

      <router-outlet></router-outlet>

      <div class="header">
        <a routerLink="/home"><h1>{{title}}</h1></a>
        <div class="top-left">
          <input class="search"/>
          <a routerLink="/profile" class="profileButton">Min Profil</a>
        </div>
       </div>

      `

})
export class AppComponent {
    title = 'How to: Adult';

}
