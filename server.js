const express = require('express');
const bodyparser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;


const app = express();

const productApi = require('./api/product.apis');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header();
    next();
});

MongoClient.connect('mongodb://localhost:27017/ProductManagement', function(err, db){
    console.log('Connected correctly to mongo server');
    // db.close();
});

productApi(app);

app.listen(3000, function(){
    console.log("Running on 3000");
});