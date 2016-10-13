import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';
import { Profile } from '../../profile';


@Component({
  selector: 'profile',
  templateUrl: './app/components/profile/profile.component.html',
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit{
  constructor(private _profileService : ProfileService){ 
  	this.profileService = _profileService;

    userprofile = _profileService.getProfiles();
  }

  /*ngOnInit(){
    userprofile = this.profileService.getProfiles();
  }*/

}