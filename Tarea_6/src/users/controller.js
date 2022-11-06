const model = require("./model");

class UsersController {
  async getAll(req, res) {
    res.status(200).send(await model.findAll());
  }

  async getOne(req, res) {
    let id = req.params["id"];
    res.status(200).send(await model.findOne(id));
  }

  async getToken(req, res) {
    const token = req.body.token;
    const response = await model.verifyToken(token);
    if(!response) {
      res.status(400).send("Invalid Token");
      return;
    }
    res.status(200).send("Valid Token");
  }

  async login(req, res) {
    let userData = req.body;
    const response = await model.login(userData);
    if(response === "Invalid Credentials"){
      res.status(400).send(response);
      return;
    }
    res.status(200).send(response);
  }

  async newUser(req, res) {
    let userData = req.body;
    const response = await model.insert(userData);
    if (!response) {
      res.status(400).send("user already exists");
      return;
    }
    res.status(200).send("user created");
  }
}

module.exports = new UsersController();
