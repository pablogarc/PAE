const model = require('./model');

class UsersController {

    async getAll(req, res) {
        res.json(await model.findAll());
    } 

    async getOne(req, res) {
        let id = req.params['id'];
        const data = await model.findOne(id);
        if(data) {
            res.send(data);
        } else {
            res.send('No encontrado');
        }
        res.send(model.findOne(req.params.id));
    }

}

module.exports = new UsersController();