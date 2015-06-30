var fs = require('fs');

fs.readFile('./view/page.html', function(err, buffer){

	console.log(buffer.toString());

});