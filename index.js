var express = require('express');
var bodyParser = require('body-parser');

var fs = require("fs");
var browserify = require("browserify");
browserify(["./public/views/react-js/index.js"])
  .transform("babelify", {presets: ["@babel/preset-env", "@babel/preset-react"]})
  .bundle()
  .pipe(fs.createWriteStream("dist/bundle.js"));

var app = express();

app.set('port', (process.env.PORT || 5050));
app.use(express.static(__dirname + '/public'));
app.use('/modules', express.static(__dirname + '/node_modules/'));
app.use('/dist', express.static(__dirname + '/dist/'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/about', function(req, res){
    res.render('about.html');
});

app.get('/lists', function(req, res){
    res.render('lists.html');
});

app.listen(app.get('port'), function() {
});
