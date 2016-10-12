import { Post } from 'post';

export interface Profile{ 
    name: string;
    image_src: string;
    created_date: string;
    num_posts: string;
    num_comments: string;
    posts: Post[];
}