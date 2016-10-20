import { Post } from '../../post';

/*
 * Class PostService creates a Post-object and returns 
 * it with the getPosts-function. 
 * In the proper code this would be fetched from an API. 
 */
export class PostsService {
  constructor() {
  }
  /*
   * Returns a list of Post-objects
   */
  getPosts() : Post[] {
    return [
      { heading: "somepost", content: "somecontent" },
      { heading: "somepost2", content: "somecontent2" },
      { heading: "somepost3", content: "somecontent3" },
      { heading: "somepost4", content: "somecontent4" },
      { heading: "somepost5", content: "somecontent5" },
      { heading: "somepost6", content: "somecontent6" }
    ]
  }
}
