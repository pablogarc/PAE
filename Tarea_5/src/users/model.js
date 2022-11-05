const { ObjectId } = require("mongodb");
const database = require("./../../database/database");
const { userCollection } = require("./../../database/collection");

class User {
  async findAll() {
    const collection = database().collection("user");
    const usersData = await collection.find({}).toArray();
    return usersData;
  }

  async findOne(id) {
    const collection = database().collection("user");
    const user = await collection.findOne({ _id: ObjectId(id) });
    return user;
  }
}

module.exports = new User();
