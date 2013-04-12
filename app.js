var express = require('express'),
	app = express(),
	cons = require('consolidate');

app.configure(function(){
	app.use(express.static(__dirname + '/public'));
	app.engine('html', cons.handlebars);
});

app.get('/', function(req, res){
	res.render('index.html', {
		firstName: 'Reed',
		lastName: 'Rizzo'
	});
});

app.listen(3000);