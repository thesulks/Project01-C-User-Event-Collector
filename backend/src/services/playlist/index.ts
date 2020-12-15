import Playlist from '../../entities/Playlist';

const getPlaylists = (): Promise<Playlist[]> => {
  return Playlist.find({ relations: ['tracks'] });
};

const getPlaylistByPlaylistId = (playlistId: number): Promise<Playlist | undefined> => {
  return Playlist.findOne(playlistId, { relations: ['tracks'] });
};

export { getPlaylists, getPlaylistByPlaylistId };