import AlbumController from '../controllers/AlbumController';
import SongController from '../controllers/SongController';
import ArtistController from '../controllers/ArtistController';

export default (server) => {

  // Album ROUTES
  server.get(`/api/album`, AlbumController.getAll);
  server.get(`/api/album/:id`, AlbumController.findOne);
  server.post(`/api/album`, AlbumController.insert)
  server.put(`/api/album/:id`, AlbumController.update);
  server.delete(`/api/album/:id`, AlbumController.delete);

  // Song ROUTES
  server.get(`/api/song`, SongController.getAll);
  server.get(`/api/song/:id`, SongController.findOne);
  server.post(`/api/song`, SongController.insert)
  server.put(`/api/song/:id`, SongController.update);
  server.delete(`/api/song/:id`, SongController.delete);

  // Artist ROUTES
  server.get(`/api/artist`, ArtistController.getAll);
  server.get(`/api/artist/:id`, ArtistController.findOne);
  server.post(`/api/artist`, ArtistController.insert)
  server.put(`/api/artist/:id`, ArtistController.update);
  server.delete(`/api/artist/:id`, ArtistController.delete);

}