import { Component } from '@angular/core';


@Component({
  selector: 'profile',
  templateUrl: './app/components/profile/profile.component.html'
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