var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var qs = require('qs')
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/',function(req,res){
	//res.sendFile(__dirname + '/form.html');
	res.render('form');
});/*
app.get('/form',function(req,res){
	//console.log(req.query);
	res.render('form',{qs:req.query});
});*/

app.post('/form',function(req,res){
	//console.log(req.body);
	var user = {
		fname: req.body.fname ,
		organisation: req.body.organisation
	}
	
	res.render('result', {result:user});
});

app.listen(8080);
console.log("welcome to rendering");