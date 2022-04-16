import { apiSendSuccess, tryCatch } from '../helpers/ApiHelper';
import Service from './Service';

class AlbumService extends Service {
  constructor(model) {
    super(model);
  }

  async findOne(id) {
    return await tryCatch(async () => {
      let item = await this.model.findById(id).populate('songs').populate('artist');

      return apiSendSuccess(item, "retrieved success");
    });
  }
  
  async getAll(query) {
    return await tryCatch(async () => {
      let item = await this.model.find().populate('artist');

      return apiSendSuccess(item, "retrieved success");
    });
  }

  async insert(data) {
    return await tryCatch(async () => {
      let item = await this.model.create(data);
      

      return apiSendSuccess(item, "Success inserting data.");
    })
  }
};

export default AlbumService;