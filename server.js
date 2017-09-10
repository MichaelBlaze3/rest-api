const express = require('express');
const bodyparser = require('body-parser');

const app = express();

var store = [
    {
        id:'12214wffeferf',
        product: 'Milk',
        price: 2.99
    }
];


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', function (req, res) {
    res.send('hello world');
});

app.post('/', function (req, res) {
    res.send('hello from post');
});

app.post('/add', function (req, res) {
    console.log(req.query);
    store.push(req.query);
    res.send('hello from post' + JSON.stringify(store));
});


app.listen(3000, function(){
    console.log("Running on 3000");
});