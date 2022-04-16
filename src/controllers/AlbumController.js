import Controller from  './Controller';
import AlbumService from  "./../services/AlbumService";
import Album from  "./../models/Album";

const albumService = new AlbumService(
  new Album().getInstance()
);

class AlbumController extends Controller {

  constructor(service) {
    super(service);
  }

}

export default new AlbumController(albumService);