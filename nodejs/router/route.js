var express = require('express');
var app = express();

app.get('/', function(req, resp){
	resp.send('<h1>Hello from Express</h1>');
});

app.get('/service', function(req, resp){
	resp.json({user: 'Raul Gil', email: 'raul@gil.com'});
});

app.get('/service/:name/:lastName', function(req, resp){

	resp.send('<h1>Hello ' + req.params.name + ' ' + req.params.lastName + '</h1>');

	console.log(req.params);
});

app.listen(8080);

console.log('Server started at 127.0.0.1:8080');