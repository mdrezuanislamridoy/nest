import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { PostService } from './post.service';
import type { IPost } from './interfaces/post';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPosts(@Query('search') search: string) {
    const posts = this.postService.getPosts();

    if (search) {
      return posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase()),
      );
    }
    return posts;
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  createPost(@Body() postData: Omit<IPost, 'id' | 'createdAt'>): IPost {
    return this.postService.create(postData);
  }
}
