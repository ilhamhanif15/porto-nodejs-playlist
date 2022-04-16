import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import slugify from 'slugify';

class Album {

  initSchema() {
    const schema = new Schema({
      title: {
        type: String,
        required: true,
      },
      slug: String,
      description: {
        type: String,
        required: false,
      },
      publishYear: {
        type: Number,
        required: true,
      },
      imageUrl: {
        type: String,
        required: false
      },
      artist: {
        type: Schema.Types.ObjectId,
        ref: "Artist"
      },
      songs: [{
        type: Schema.Types.ObjectId, 
        ref: "Song"
      }]
    }, 
    { 
      timestamps: true 
    });

    schema.pre("save", function(next) {
        let album = this;
        if (!album.isModified("title")) {
          return next();
        }
        album.slug = slugify(album.title, "-");
        console.log('set slug', album.slug);
        return next();
      },
      function(err) {
        next(err);
      }
    );

    schema.plugin(uniqueValidator);

    mongoose.model("Album", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("Album");
  }

  getDB() {
    return mongoose.model("Album");
  }
}

export default Album;