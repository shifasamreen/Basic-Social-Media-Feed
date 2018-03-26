var express = require('express');
//Added the below one lines to remove undefined body parser error.
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var app = express();

var db=null;

//connect to Mongo
MongoClient.connect("mongodb://localhost:27017/feeds", function(err, dbconn){
    if(!err){
        console.log("We are connected");
        db=dbconn;
    }
    
});

app.use(express.static('public'));
//Added the below two lines to remove undefined body parser error
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//make allFeeds global!

app.get('/myfeeds', function(req, res, next){
    db.collection('feeds', function(err, feedsCollection){
        feedsCollection.find().toArray(function(err, feeds){
           return res.json(feeds); 
        });
    });
    
});

app.post('/myfeeds', function(req, res, next){
   //console.log(req.body);
    db.collection('feeds', function(err, feedsCollection){
        feedsCollection.insert({text: req.body.newFeed},{w:1},function(err, feeds){
           return res.send(); 
        });
    });
    
}); 

app.listen('3000', function(){
   console.log("Listening"); 
});

