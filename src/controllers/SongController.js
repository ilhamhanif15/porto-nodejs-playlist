import Controller from  './Controller';
import SongService from  "./../services/SongService";
import Song from  "./../models/Song";

const songService = new SongService(
  new Song().getInstance()
);

class SongController extends Controller {

  constructor(service) {
    super(service);
  }

}

export default new SongController(songService);