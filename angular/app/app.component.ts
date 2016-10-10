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
      <input class="search"/>
      <a routerLink="/profile"><button class="profileButton" >Min Profil</button></a>




       </div>

      `

})
export class AppComponent {
    title = 'How to: Adult';

}
