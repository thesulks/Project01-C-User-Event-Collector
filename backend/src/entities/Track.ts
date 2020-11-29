import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import MP3 from './MP3';
import Artist from './Artist';
import Playlist from './Playlist';

@Entity()
export default class Track extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  title!: string;

  @Column()
  songwriter!: string;

  @Column()
  composer!: string;

  @Column()
  lyric!: string;

  @Column()
  isLocal!: boolean;

  @OneToMany(() => MP3, mp3 => mp3.user, { onDelete: 'CASCADE' })
  mp3!: MP3[];

  @ManyToMany(() => Artist, artist => artist.tracks, { onDelete: 'CASCADE' })
  artists!: Artist[];

  @ManyToMany(() => Playlist, playlist => playlist.tracks, { onDelete: 'CASCADE' })
  @JoinTable({ name: 'TrackPlaylist' })
  playlists!: Playlist[];
}