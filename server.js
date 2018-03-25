var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/myfeeds', function(req, res, next){
   var allFeeds=[" Hello there! This is a simple attempt to begin developing in MEAN stack.",
                     " Not trying to create something big as of now.",
                    "Just want  to get started, so starting of small.",
                   "Are you fine, by the way?"]; 
    
    return res.send(allFeeds);
});

app.listen('3000', function(){
   console.log("Listening"); 
});

