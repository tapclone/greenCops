//datbase connection in using Mongoclient without using any schema

const mongoClient = require("mongodb").MongoClient;

const state = {
  db: null,
};
module.exports.connect = function (done) {
    //mongo url

  const url= "mongodb+srv://asifsaheer:asifsaheer@cluster0.j3g9az8.mongodb.net/?retryWrites=true&w=majority"
  mongoClient.connect(url, (err, data) => {
    if (err) return done(err);

    //mongoDB name
    const dbname = 'Green-Corps';
    state.db = data.db(dbname);
  });
  done();
};
module.exports.get = function () {
  return state.db;
};
