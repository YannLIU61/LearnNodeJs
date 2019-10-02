var http = require('http');
var page = require('url');
var monmodule = require('monmodule');
var server = http.createServer(function(req, res){
    var url = page.parse(req.url).pathname;
    console.log(url);
    res.writeHead(200);
    res.end('Salut tout le monde !');
});
monmodule.bonjour();
monmodule.bye();
server.listen(8081);