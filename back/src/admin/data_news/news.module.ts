import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { News } from './entities/news.entity';
import { Tag } from './entities/tags.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([News, Tag]),
  ],
  providers: [NewsService],
  controllers: [NewsController],
})
export class NewsModule {}
