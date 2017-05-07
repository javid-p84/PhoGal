var http = require("http");
var exp = require("express");
var expressSession = require("express-session");
var cookie = require("cookie-parser");
var bodyParser = require("body-parser");
var path = require("path");
var flash = require('connect-flash');

var app = exp();
var controllers = require('./controllers');

app.set('view engine', 'vash');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookie());
app.use(expressSession({ secret: "bib" }));
app.use(flash());



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
