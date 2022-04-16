import mongoose from "mongoose";
import { tryCatch, apiSendSuccess } from '../helpers/ApiHelper';

class Service {
  constructor(model) {
    this.model = model;
    this.getAll = this.getAll.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(query) {
    let { skip, limit } = query;

    skip = skip ? Number(skip) : 0;
    limit = limit ? Number(limit) : 10;

    delete query.skip;
    delete query.limit;

    if (query._id) {
      try {
        query._id = new mongoose.mongo.ObjectId(query._id);
      } catch (error) {
        console.log("not able to generate mongoose id with content", query._id);
      }
    }

    try {
      let items = await this.model
        .find(query)
        .skip(skip)
        .limit(limit);
      let total = await this.model.count();

      return {
        error: false,
        statusCode: 200,
        data: items,
        total
      };
    } catch (errors) {
      return {
        error: true,
        statusCode: 500,
        errors
      };
    }
  }

  async insert(data) {
    return await tryCatch(async () => {
      let item = await this.model.create(data);

      return apiSendSuccess(item, "Success inserting data.");
    })
  }

  async update(id, data) {
    return await tryCatch(async () => {
      let item = await this.model.findByIdAndUpdate(id, data, { new: true });

      return apiSendSuccess(item, "Success updating data.");
    })
  }
  
  async findOne(id) {
    return await tryCatch(async () => {
      let item = await this.model.findOne({ id });

      return apiSendSuccess(item, "Success retrieved data")
    })
  }

  async delete(id) {
    return await tryCatch(async () => {
      let item = await this.model.findByIdAndDelete(id);

      return apiSendSuccess(item, "Success deleting data")
    })
  }
}

export default Service;