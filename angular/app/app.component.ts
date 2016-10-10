import { Component } from '@angular/core';
export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
      <a routerLink="/home">Home</a>
      <a routerLink="/profile">Profile</a>
      <router-outlet></router-outlet>
      <h1>{{title}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input value="{{hero.name}}" placeholder="name">
      </div>
      `

})
export class AppComponent {
    title = 'How to: Adult';
    hero = Hero = {
        id: 1,
        name: 'Windstorm'
    }
}
