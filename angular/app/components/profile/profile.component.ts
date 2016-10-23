import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';
import { Profile } from '../../profile';

/* 
 * Profile component
 * selector tells which html object the code should be rendered
 * to
 * templateUrl is the url to the html tamplate for the componen
 */
@Component({
  selector: 'profile',
  templateUrl: './app/components/profile/profile.component.html'
})
export class ProfileComponent implements OnInit {
  userprofile = {};

/*
 * Constructor is called upon creation and ties the 
 * ProfileService from ../../services/profile/profile.service
 */
  constructor(private _profileService : ProfileService){ 
  }
/*
 * ngOnInit is called when the information frm the service
 * is loaded. 
 * Sets the class variable userprofile  to the profile returned
 * from the service. This variable can then be used in the template. 
 */
  ngOnInit() {
    this.userprofile = this._profileService.getProfiles();
    //console.log(this.userprofile);
  }
}
