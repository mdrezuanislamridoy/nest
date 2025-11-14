import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostController } from './post/post.controller';
import { PostModule } from './post/post.module';

@Module({
  imports: [PostModule],
  providers: [AppService],
  controllers: [AppController, PostController],
})
export class AppModule {}
