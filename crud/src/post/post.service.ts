import { Injectable } from '@nestjs/common';
import { IPost } from './interfaces/post';

@Injectable()
export class PostService {
  posts: IPost[] = [
    {
      id: 1,
      title: 'Hello 1',
      content: 'This is hello post content',
      createdAt: new Date(),
    },
  ];

  getPosts() {
    return this.posts;
  }

  create(postData: Omit<IPost, 'id' | 'createdAt'>): IPost {
    const newPost = {
      id: this.posts.length + 1,
      ...postData,
      createdAt: new Date(),
    };

    this.posts.push(newPost);
    return newPost;
  }
}
