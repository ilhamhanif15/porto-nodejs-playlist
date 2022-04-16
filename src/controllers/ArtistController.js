import Controller from  './Controller';
import ArtistService from  "./../services/ArtistService";
import Artist from  "./../models/Artist";

const artistService = new ArtistService(
  new Artist().getInstance()
);

class ArtistController extends Controller {

  constructor(service) {
    super(service);
  }

}

export default new ArtistController(artistService);