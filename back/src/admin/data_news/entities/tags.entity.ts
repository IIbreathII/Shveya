import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { News } from './news.entity';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true })
  nameUk: string;

  @Column({ unique: true, nullable: true })
  nameEn?: string;

  @ManyToMany(() => News, (news) => news.tagsUk)
  newsUk: News[];

  @ManyToMany(() => News, (news) => news.tagsEn)
  newsEn: News[];
}
