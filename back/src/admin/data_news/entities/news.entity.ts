import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Tag } from './tags.entity';

export type ParagraphText = {
  text: string;
  bold: boolean;
  italic: boolean;
};

export type ContentBlock =
  | { type: 'image'; url: string; alt: string }
  | { type: 'paragraph'; children: ParagraphText[] };

@Entity('news')
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  // Ukrainian tags
  @ManyToMany(() => Tag, (tag) => tag.newsUk, { cascade: true })
  @JoinTable({ name: 'news_tags_uk' })
  tagsUk: Tag[];

  // English tags
  @ManyToMany(() => Tag, (tag) => tag.newsEn, { cascade: true, nullable: true })
  @JoinTable({ name: 'news_tags_en' })
  tagsEn?: Tag[];

  @Column()
  titleUk: string;

  @Column({ nullable: true })
  titleEn?: string;

  @Column({ type: 'timestamp' })
  createdAt: Date;

  @Column('json')
  contentUk: ContentBlock[];

  @Column('json', { nullable: true })
  contentEn?: ContentBlock[];
}
