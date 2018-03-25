var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/myfeeds', function(req, res, next){
   var myFeeds=["Hey Shifa", "This is me!", "Its the server responding"," through API"];
    return res.send(myFeeds);
});
app.listen('3000', function(){
   console.log("Listening"); 
});

