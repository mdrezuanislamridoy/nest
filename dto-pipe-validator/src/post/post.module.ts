import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { IsPost } from './pipes/post.pipe';

@Module({
  controllers: [PostController],
  providers: [PostService, IsPost],
  exports: [PostService],
})
export class PostModule {}
