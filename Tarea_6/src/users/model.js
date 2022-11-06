const ObjectId = require('mongodb').ObjectId;
const jwt = require("jsonwebtoken");
const database = require("./../../database/database");
//const { userCollection } = require("./../../database/collection");
require("dotenv").config();

class User {
  async findAll() {
    const collection = database().collection("user");
    const usersData = await collection.find({}).toArray();
    return usersData;
  }

  async findOne(id) {
    const collection = database().collection("user");
    const user = await collection.find({ _id: ObjectId(id) }).toArray();
    return user;
  }

  verifyToken(token) {
    if (!token) return false;
    try {
      jwt.verify(token, process.env.JWT_SECRET_KEY);
      return true;
    } catch(err) {
      return false;
    }
  }

  async login(userData) {
    const collection = database().collection("user");
    const errorMsg = "Invalid Credentials";

    const data = await collection.findOne({
      email: userData.email,
    });

    if (!data) return errorMsg;
    if (userData.password !== data.password) return errorMsg;

    let payLoad = { id: data._id };
    let token = jwt.sign(payLoad, process.env.JWT_SECRET_KEY, {expiresIn: "5h"});

    return token;
  }

  async insert(userData) {
    const collection = database().collection("user");
    const usersData = await collection.findOne({ email: userData.email });

    if (usersData) {
      return false;
    }

    await collection.insertOne(userData);
    return true;
  }
}

module.exports = new User();
