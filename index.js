console.log('index.js executing');

var express = require('express');
var app = express();
var addOne = require('./myModule');

addOne([1,3,0]);

app.get( '/', function(req,res){
	res.send('Hello, World!');
});

var port = 3000;
app.listen(port,function(){
	console.log('Listening on port ' + port);
});

var router = express.Router();

router.get('/', function(req,res){ res.send('Index')});
router.post('/', function(req, res){ res.send('About Index')});

app.use('/', router);

