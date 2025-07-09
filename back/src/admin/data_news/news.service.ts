import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource, EntityManager } from 'typeorm';

import { News } from './entities/news.entity';
import { Tag } from './entities/tags.entity';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

export type Lang = 'uk' | 'en';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private readonly newsRepository: Repository<News>,

    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,

    private readonly dataSource: DataSource,
  ) {}

  private async processTags(
    rawTags: Array<{ nameUk?: string; nameEn?: string }>,
    manager: EntityManager,
  ): Promise<Tag[]> {
    const tagRepo = manager.getRepository(Tag);
    const result: Tag[] = [];
    const seen = new Set<string>();

    for (const { nameUk, nameEn } of rawTags) {
      const trimmedUk = nameUk?.trim();
      const trimmedEn = nameEn?.trim();
      if (!trimmedUk && !trimmedEn) continue;

      const key = `${trimmedUk || ''}||${trimmedEn || ''}`;
      if (seen.has(key)) continue;
      seen.add(key);

      const existing = await tagRepo.findOne({
        where: [
          trimmedUk ? { nameUk: trimmedUk } : null,
          trimmedEn ? { nameEn: trimmedEn } : null,
        ].filter(Boolean) as any[],
      });

      if (existing) {
        result.push(existing);
      } else {
        const newTag = tagRepo.create({ nameUk: trimmedUk, nameEn: trimmedEn });
        result.push(await tagRepo.save(newTag));
      }
    }

    return result;
  }

  async create(createNewsDto: CreateNewsDto): Promise<News> {
    return this.dataSource.transaction(async (manager) => {
      const { tags, ...rest } = createNewsDto;

      const processed = await this.processTags(tags, manager);

      const news = manager.create(News, {
        ...rest,
        createdAt: new Date(rest.createdAt),
        tagsUk: processed,
        tagsEn: processed,
      });

      return manager.save(news);
    });
  }

  async findAllPaginated(
    page: number,
    limit: number,
    lang: Lang,
  ): Promise<{
    data: { id: number; tags: string[]; title: string; createdAt: Date; content: any[] }[];
    total: number;
    page: number;
    limit: number;
  }> {
    const take = Math.min(limit, 100);
    const skip = (page - 1) * take;

    const [items, total] = await this.newsRepository.findAndCount({
      skip,
      take,
      order: { createdAt: 'DESC' },
      relations: ['tagsUk', 'tagsEn'],
    });

    const data = items.map((item) => {
      const tagEntities = lang === 'en' && item.tagsEn?.length ? item.tagsEn : item.tagsUk;
      const tags = tagEntities.map(t => (lang === 'en' ? t.nameEn || t.nameUk : t.nameUk));
      const title = lang === 'en' && item.titleEn ? item.titleEn : item.titleUk;
      const content = lang === 'en' && item.contentEn?.length ? item.contentEn : item.contentUk;

      return { id: item.id, tags, title, createdAt: item.createdAt, content };
    });

    return { data, total, page, limit: take };
  }

  async findOne(id: number, lang: Lang): Promise<{ id: number; tags: string[]; title: string; createdAt: Date; content: any[] }> {
    const item = await this.newsRepository.findOne({
      where: { id },
      relations: ['tagsUk', 'tagsEn'],
    });
    if (!item) throw new NotFoundException(`Новину з id ${id} не знайдено`);

    const tagEntities = lang === 'en' && item.tagsEn?.length ? item.tagsEn : item.tagsUk;
    const tags = tagEntities.map(t => (lang === 'en' ? t.nameEn || t.nameUk : t.nameUk));
    const title = lang === 'en' && item.titleEn ? item.titleEn : item.titleUk;
    const content = lang === 'en' && item.contentEn?.length ? item.contentEn : item.contentUk;

    return { id: item.id, tags, title, createdAt: item.createdAt, content };
  }

  async update(id: number, dto: UpdateNewsDto): Promise<News> {
    return this.dataSource.transaction(async (manager: EntityManager) => {
      const news = await manager.findOne(News, {
        where: { id },
        relations: ['tagsUk', 'tagsEn'],
      });
      if (!news) throw new NotFoundException(`Новину з id=${id} не знайдено`);

      if (dto.titleUk !== undefined) news.titleUk = dto.titleUk;
      if (dto.titleEn !== undefined) news.titleEn = dto.titleEn;
      if (dto.createdAt !== undefined) news.createdAt = new Date(dto.createdAt);
      if (dto.contentUk !== undefined) news.contentUk = dto.contentUk;
      if (dto.contentEn !== undefined) news.contentEn = dto.contentEn;

      if (dto.tags !== undefined) {
        const processed = await this.processTags(dto.tags, manager);
        news.tagsUk = processed;
        news.tagsEn = processed;
      }

      return manager.save(News, news);
    });
  }

  async updateTag(id: number, dto: UpdateTagDto): Promise<Tag> {
    const tag = await this.tagRepository.preload({ id, ...dto });
    if (!tag) throw new NotFoundException(`Тег з id=${id} не знайдено`);
    return this.tagRepository.save(tag);
  }

  async removeTag(id: number): Promise<void> {
    const result = await this.tagRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`Тег з id=${id} не знайдено`);
  }

  async getAllTags(): Promise<Tag[]> {
    return this.tagRepository.find();
  }

  async remove(id: number): Promise<void> {
    const result = await this.newsRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`Новину з id ${id} не знайдено`);
  }

  async getAllNewsById(id: number): Promise<News | null> {
    return this.newsRepository.findOne({
      where: { id },
      relations: ['tagsUk', 'tagsEn'],
    });
  }

  async getAllNewsByTag(
    lang: 'uk' | 'en',
    tagId: number,
  ): Promise<News[]> {
    const joinTable = lang === 'uk' ? 'news_tags_uk' : 'news_tags_en';

    return this.newsRepository
      .createQueryBuilder('n')
      .innerJoin(
        joinTable,      
        'nt',           
        'nt.newsId = n.id AND nt.tagsId = :tagId',
        { tagId },
      )
      .getMany();
  }
}
