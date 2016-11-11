import { Post } from 'post';

/*
 * Interface for the Profile-object. 
 * Sets the type for each of the required properties. 
 * Post is an object from the interface post.ts
 */
export interface Profile { 
    name: string;
    image_src: string;
    created_date: string;
    num_posts: string;
    num_comments: string;
    posts: Post[];
}