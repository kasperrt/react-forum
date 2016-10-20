import { Profile } from '../../profile';
import { Post } from '../../post';

/*
 * Class ProfileService creates a userprofile
 * and returns it with the getProfiles-function. 
 * In the proper code this would be fetched from 
 * an API. 
 */
export class ProfileService {
  constructor() {
  }

  /*
   * Returns a user-profile as a Profile-object
   */
  getProfiles() {
    return {
      name: "Brukernavn",
      image_src: "http://i.imgur.com/izzpeRb.jpg",
      created_date: "01.10.2016",
      num_posts: "10",
      num_comments: "15",
      posts: [
        { heading: "somepost", content: "somecontent" },
        { heading: "somepost2", content: "somecontent2" }
      ]
    }
  }
}
