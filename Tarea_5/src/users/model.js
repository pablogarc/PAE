const database = require('./../../database/database');
const { userCollection } = require('./../../database/collection');

class User {

    async findAll() {
        const collection = db.collection('user');
        const UsersData = await collection.find({}).toArray();
        return UsersData;
    }

    async findOne(id) {
        const collection = db.collection('user');
        const query = {first_name: id}
        const user = await collection.find(query);
        return user;
    }
    
}

module.exports = new User();