var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/service/food/', function(req,resp){

	resp.json([
		{
			name: 'Sushi', 
			price: 1.28, 
			thumb: 'http://lorempixel.com/300/300/food/4'
		}, 
		{
			name: 'Vegetable', 
			price: 2.36, 
			thumb: 'http://lorempixel.com/300/300/food/5'
		},
		{
			name: 'Bread', 
			price: 0.58, 
			thumb: 'http://lorempixel.com/300/300/food/7'
		},
		{
			name: 'Hamburger', 
			price: 5.45, 
			thumb: 'http://lorempixel.com/300/300/food/9'
		},
	]);

});

app.listen(8080);