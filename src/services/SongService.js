import Service from './Service';
import Album from '../models/Album';
import { tryCatch, apiSendSuccess } from '../helpers/ApiHelper';

class SongService extends Service {
  constructor(model) {
    super(model);
    this.album = new Album().getDB()
  }

  async findOne(id) {
    return await tryCatch(async () => {
      let item = await this.model.findById(id).populate({
        path: 'album',
        populate: 'artist'
      });

      return apiSendSuccess(item, "retrieved success");
    });
  }

  async insert(data) {
    return await tryCatch(async () => {
        let song    = await this.model.create(data)
        let album   = await this.album.findByIdAndUpdate(
            data.album,
            { $push: { songs: song._id } },
            { new: true, useFindAndModify: false }
        )

        return apiSendSuccess(song, "song is success created.")
    })
  }
};

export default SongService;