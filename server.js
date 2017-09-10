const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send('hello world');
});

app.post('/', function (req, res) {
    res.send('hello from post');
});

app.listen(3000, function(){
    console.log("Running on 3000");
});