import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { PostsController } from './posts.controller';
import { Module } from '@nestjs/common';
import { PostService } from './posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  controllers: [PostsController],
  providers: [PostService],
})
export class PostsModule {}
