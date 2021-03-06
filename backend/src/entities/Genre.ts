import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import Artist from './Artist';
import Album from './Album';

@Entity()
export default class Genre extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToMany(() => Artist, artist => artist.genres)
  artists!: Artist[];

  @ManyToMany(() => Album, album => album.genres)
  @JoinTable({ name: 'AlbumGenre' })
  albums!: Artist[];
}
