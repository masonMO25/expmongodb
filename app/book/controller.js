import { MongoClient } from "mongodb";

const URI = "mongodb://127.0.0.1:27017";

const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = client.db("InventoryDB");
const bookCollection = db.collection("books");

const controller = {
  create(newBooks) {
    return bookCollection.insertOne(newBooks);
  },
  createMany(newBooks) {
    return bookCollection.insertMany(newBooks);
  },
  readAll() {
    return bookCollection.find().toArray();
  },
};

export default controller;
