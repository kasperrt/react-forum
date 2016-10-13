import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';
import { Profile } from '../../profile';


@Component({
  selector: 'profile',
  templateUrl: './app/components/profile/profile.component.html'
})
export class ProfileComponent implements OnInit {
  userprofile = {};
  constructor(private _profileService : ProfileService){ 
  }

  ngOnInit() {
    this.userprofile = this._profileService.getProfiles();
    console.log(this.userprofile);
  }
}