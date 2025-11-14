import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { PostService } from '../post.service';

@Injectable()
export class IsPost implements PipeTransform {
  constructor(private readonly postService: PostService) {}

  transform(value: number) {
    const post = this.postService.findOne(value);
    if (!post) {
      throw new NotFoundException(`Post ${value} not found `);
    }
    return value;
  }
}
