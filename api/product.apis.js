module.exports = function(app){

    var store = [
        {
            id:'12214wffeferf',
            product: 'Milk',
            price: 2.99
        }
    ];

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
    
}