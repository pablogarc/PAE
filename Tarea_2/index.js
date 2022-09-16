const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const axios = require('axios');
require('dotenv').config()

const apiKey = process.env.NEWS_API_KEY;

//const routerNoticias = require('./noticias/routes');

const app = express();

app.use('/Assets', express.static(path.join(__dirname, '/Assets')));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

//app.use('/noticias', middleware, routerNoticias);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/news', async (req, res) => {
    let query = req.query.category;
    let url = 'https://newsapi.org/v2/everything?q='+ query + '&apiKey=' + apiKey;

    const news_get = await axios.get(url);

    res.render('news', {
        articles: news_get.data.articles
    });

});

app.get('/news/api', async (req, res) => {
    let url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=' + apiKey;

    const news_get = await axios.get(url);
    res.send(news_get.data.articles);

});

app.listen(3000, () => {
    console.log('app is listening in port 3000');
});