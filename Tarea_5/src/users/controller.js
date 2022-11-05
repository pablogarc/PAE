const model = require("./model");

class UsersController {
  async getAll(req, res) {
    res.send(await model.findAll());
  }

  async getOne(req, res) {
    let id = req.params["id"];
    const data = await model.findOne(id);
    if (data) {
      res.send(data);
    } else {
      res.send("No encontrado");
    }
  }
}

module.exports = new UsersController();
