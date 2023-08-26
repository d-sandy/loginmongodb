var express=require("express");
var bodyParser=require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sandhiya:ltjLc8vIK4rMo92H@cluster0.c4a7zni.mongodb.net/stem',{useNewUrlParser: true});
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})

var app=express()


app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/log_in', function(req,res){
	var junioruserName = req.body.junioruserName;
	var data = {
		"junioruserName": junioruserName
	}
db.collection('login').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully");
			
	});
		
	return res.redirect('https://smaacstem.github.io/');
})


app.get('/',function(req,res){
res.set({
	'Access-control-Allow-Origin': '*'
	});
// return res.redirect('https://smaacstem.github.io/');
}).listen(3000)


console.log("server listening at port 3000");
