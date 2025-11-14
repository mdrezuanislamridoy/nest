import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PostService } from './post.service';
import { IsPost } from './pipes/post.pipe';
import { PostDto } from './dto/post.dto';
import { UpdatedPostDto } from './dto/updatedPost.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get(':id')
  findPost(@Param('id', ParseIntPipe, IsPost) id: number) {
    return this.postService.findOne(id);
  }
  @Post('/create')
  createPost(@Body() data: PostDto) {
    return this.postService.createPost(data);
  }
  @Put(':id')
  updatePost(
    @Param('id', ParseIntPipe, IsPost) id: number,
    @Body() postData: UpdatedPostDto,
  ) {
    return this.postService.updatePost(id, postData);
  }
}
