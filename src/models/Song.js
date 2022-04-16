import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import slugify from 'slugify';

class Song {

  initSchema() {
    const schema = new Schema({
      title: {
        type: String,
        required: true,
      },
      album: {
          type: Schema.Types.ObjectId,
          ref: 'Album'
      },
      youtubeUrl: {
          type: String,
          required: true
      }
    }, 
    { 
        timestamps: true 
    });
    
    schema.plugin(uniqueValidator);
    
    mongoose.model("Song", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("Song");
  }
}

export default Song;