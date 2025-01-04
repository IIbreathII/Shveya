import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Marker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', precision: 9, scale: 6 })
  lat: string; // Широта

  @Column({ type: 'varchar', precision: 9, scale: 6 })
  lng: string; // Долгота

  @Column({ type: 'varchar', length: 255, nullable: true })
  title: string; // Заголовок

  @Column({ type: 'varchar', length: 255, nullable: true })
  adress: string; // Адрес

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone: string; // Номер телефона

  @Column({ type: 'varchar', length: 255 })
  path: string; // Путь
}
