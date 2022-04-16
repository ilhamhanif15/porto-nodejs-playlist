import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import slugify from 'slugify';

class Artist {

  initSchema() {
    const schema = new Schema({
      name: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
        required: false
      },
    }, 
    { 
      timestamps: true 
    });

    schema.plugin(uniqueValidator);

    mongoose.model("Artist", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("Artist");
  }

  getDB() {
    return mongoose.model("Artist");
  }
}

export default Artist;