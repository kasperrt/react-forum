import { Component } from '@angular/core';
//import { profile } from './mockdata.js';


@Component({
  selector: 'profile',
  template: `
	  <div *ngIf='userprofile'>
      <div class='top'>
        <h2> Min side! </h2>
        <a routerLink="" class="logOutButton">Logg ut</a>
      </div>
      <div class='row'>
        <img src={{userprofile.image_src}} alt='profile image'/>
        <div class='profileInfo'>
          Navn: {{userprofile.name}}
          Bruker opprettet: {{userprofile.created_date}}
          <br>
          Antall innlegg skrevet: {{userprofile.num_posts}}
          Antall kommentarer skrevet: {{userprofile.num_comments}}
        </div>
      </div>
      <div class='row'>
        <div class='profileInfo'>
          <h2> Siste innlegg </h2>
          <div *ngFor='let post of userprofile.posts'>
          {{post.heading}}
          </div>
        </div>
        <div class='profileInfo'>
          <h2> Bidrag per måned </h2>
          Graf
        </div>
      </div>
    </div>
    
  `
})
export class ProfileComponent{
  // Typescript can't read this object, so it has to be rewritten somehow
  userprofile = [
    "name": "Brukernavn",
    "image_src": "http://i.imgur.com/izzpeRb.jpg",
    "created_date": "01.10.2016",
    "num_posts": "10",
    "num_comments": "15",
    "posts": {
      "heading": "Randompost",
      "content": "randompost content",
    }
  ]
}