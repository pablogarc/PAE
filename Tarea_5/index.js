const express = require('express');
require('dotenv').config();

const database = require('./database');
const apiRoutes = require('./src/api');

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', apiRoutes);

app.get('', (req, res) => {
    res.send('api works!');
});

database.connect().then(client => {
  const db = client.db('Users');
  database.db(db);

  app.listen(port, () => {
    console.log('app is running in port ' + port);
  });
}).catch(err => {
  console.log('Failed to connect to database');
});