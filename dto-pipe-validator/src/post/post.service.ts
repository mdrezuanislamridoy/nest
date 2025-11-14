import { Injectable, NotFoundException } from '@nestjs/common';
import { IPost } from './interface/post.interface';

@Injectable()
export class PostService {
  posts: IPost[] = [
    {
      id: 1,
      title: 'this is my first post',
      description: 'This is the description for my post',
      author: 'Ridoy',
      createdAt: new Date(),
    },
  ];
  getPosts() {
    if (this.posts.length < 1) {
      throw new NotFoundException('No posts available here');
    }
    return this.posts;
  }

  findOne(id) {
    const post = this.posts.find((post) => post.id === id);
    return post;
  }

  createPost(data: Omit<IPost, 'id' | 'createdAt'>): IPost {
    const newPost = {
      id: this.posts.length + 1,
      ...data,
      createdAt: new Date(),
    };
    this.posts.push(newPost);
    return newPost;
  }
  updatePost(id: number, data: Partial<IPost>) {
    const findIndex = this.posts.findIndex((post) => post.id === id);
    const updatedPost = {
      ...this.posts[findIndex],
      ...data,
    };

    this.posts[findIndex] = updatedPost;
    return updatedPost;
  }
}
