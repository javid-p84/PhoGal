var http = require("http");
var exp = require("express");
var app = exp();
var controllers = require('./controllers');

app.set('view engine', 'vash');

app.get('/', function (req, res) {
    res.send('<html><body>' + req.url + '</body></html>');
});


app.get('/api/users', function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ name: "javid" });
});

controllers.init(app);

var server = http.createServer(app);
server.listen(3000);
