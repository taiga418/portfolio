var koa = require('koa');
var serve = require('koa-static');

var app = koa();

app.use(serve('dist'));

var server = app.listen(3000, function() {
    console.log('Koa is listening to http://localhost:3000');
});

module.exports = app;
