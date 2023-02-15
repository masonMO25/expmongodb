import { MongoClient } from "mongodb";

const URI = "mongodb://127.0.0.1:27017";

const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = client.db("ShelterDB");
const petCollection = db.collection("pets");

petCollection.insertOne({
  name: "Fido",
  type: "Pug",
});

const controller = {
  create(newPet) {
    return petCollection.insertOne(newPet);
  },
  readAll() {
    return petCollection.find().toArray();
  },
};

export default controller;
