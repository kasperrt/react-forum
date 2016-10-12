import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';
import { Profile } from '../../profile';


@Component({
  selector: 'profile',
  templateUrl: './app/components/profile/profile.component.html'
})
export class ProfileComponent implements OnInit{
  constructor(private _profileService : ProfileService){ }

  ngOnInit(){
    userprofiles: Profile[] = this._profileService.getProfile();
    userprofile = userprofiles[0];
  }

}