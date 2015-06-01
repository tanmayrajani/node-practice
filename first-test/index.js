var express = require('express'),
app = express();
var adRouter = express.Router();

adRouter.use(function (req,res,next) {
	console.log(req.method,req.url);
	next();
})

adRouter.get('/',function (req,res) {
	res.send('At the dashboard!');
})

adRouter.get('/users/:name',function (req,res) {
	res.send('Let\'s play, '+ req.params.name + '. :D');
})

adRouter.get('/posts',function (req,res) {
	res.send('New posts');
})

app.use('/ass',adRouter);

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}

app.route('/haha')
	.get(function (req,res) {
		res.send('hello would you suck my dick, please?');
	})
	.post(function (req,res) {
		console.log('I\'m sucking it now!');
		res.send('It went down the throat :D ');
	})

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

console.log('1337 is a magic port');