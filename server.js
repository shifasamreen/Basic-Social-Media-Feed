var express = require('express');
//Added the below one lines to remove undefined body parser error.
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
//Added the below two lines to remove undefined body parser error
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//make allFeeds global!
var allFeeds=[" Hello there! This is a simple attempt to begin developing in MEAN stack.",
                " Not trying to create something big as of now.",
                "Just want  to get started, so starting of small.",
                "Are you fine, by the way?"]; 

app.get('/myfeeds', function(req, res, next){
    
    return res.send(allFeeds);
});

app.post('/myfeeds', function(req, res, next){
   //console.log(req.body);
    allFeeds.push(req.body.newFeed);
    res.send();
}); 

app.listen('3000', function(){
   console.log("Listening"); 
});

