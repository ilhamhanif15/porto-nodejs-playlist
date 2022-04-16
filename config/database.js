import mongoose from "mongoose";
require('dotenv').config();

class Connection {
  constructor() {
    const url =
      process.env.MONGODB_URI || `mongodb://localhost:27017/node-starter`;
    console.log("Establish new connection with url", url);

    // mongoose.Promise = global.Promise;
    // mongoose.set("useNewUrlParser", true);
    // mongoose.set("useFindAndModify", false);
    // mongoose.set("useCreateIndex", true);
    // mongoose.set("useUnifiedTopology", true);
    // mongoose.connect(url);

    // try {
    //     await mongoose.connect(url, {
    //       useNewUrlParser: true,
    //       useUnifiedTopology: true,
    //       useFindAndModify: false,
    //       useCreateIndex: true,
    //     })
    //     console.log('Connected to MongoDB')
    // } catch (err) {
    //     console.error("ERROR")
    // }

    mongoose.connect(url);
    const database = mongoose.connection;

    database.on('error', (error) => {
        console.log(error)
    })

    database.once('connected', () => {
        console.log('Database Connected');
    })
  }
}

export default new Connection();