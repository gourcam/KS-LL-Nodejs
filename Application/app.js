var express = require('express')
var app = express();

const indexRouter = require('./controller/index')
app.use('/', indexRouter);

const newsRouter = require('./controller/news')
app.use('/news', newsRouter);

app.listen(3000);

console.log('Application started 3000 port!');