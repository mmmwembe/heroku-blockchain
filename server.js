var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function(req, res){
    res.render('/templates/index.html',{email:data.email,password:data.password});
});

app.get('/main', function(req, res) {
    var first_name = 'Michael';
    var last_name = 'Mwembeshi'
    res.render(__dirname + "/views/layouts/main.html", {first_name:first_name, last_name: last_name });
  });