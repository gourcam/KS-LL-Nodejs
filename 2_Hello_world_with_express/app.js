var express = require('express')
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World!');
});


app.get('/wordofday', function(req, res) {
    res.send('Architecture Chapter!');
});

app.listen(3000);

console.log('Application started 3000 port!');