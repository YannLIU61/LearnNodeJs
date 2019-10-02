var express = require('express');
var ejs = require('ejs');
var path=require("path")
var app = express();

// 这是ejs配置 不配置也行默认在views文件下
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil');
});

app.get('/home', function (req, res) {
    res.setHeader('Content-type','text/plain');
    res.send('You are at homepage.');

});
app.get('/etage/:etagenum/chambre', function(req, res) {
    res.render('chambre.ejs', {etage: req.params.etagenum});
});
app.get('/compter/:nombre', function(req, res) {
    var noms = ['Robert', 'Jacques', 'David'];
    res.render('page.ejs', {compteur: req.params.nombre, noms: noms});
});

app.listen(8081);