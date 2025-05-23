import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Subcategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  subcategory: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  subcategory_en: string;

  @Column('json', { nullable: true })
  url: string[];

  @Column('json', { nullable: true })
  url_en: string[];

  @Column('json')
  lekala: { path: string; text: string; text_en: string }[];

  @Column('json')
  authors: string[];

  @Column('json')
  authors_en: string[];

  @Column('json')
  example: { path: string; text: string; text_en: string }[];

  @Column({ type: 'text', nullable: true })
  details: string;

  @Column({ type: 'text', nullable: true })
  details_en: string;

  @Column({ type: 'text', nullable: true })
  summary: string;

  @Column({ type: 'text', nullable: true })
  summary_en: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  categoryname: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  categoryname_en: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  preview: string;

  @ManyToOne(() => Category, (category) => category.subcategories, {
    nullable: true,
  })
  category: Category; // Связь с категорией
}
