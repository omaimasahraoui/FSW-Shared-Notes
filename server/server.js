var express=require('express');
var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/vnotes_db');

var bodyParser=require('body-parser');
var path=require('path');

app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

var port = 3000 || env.port;


// Define Routes
var users=require('./routes/users.js');
var graphs=require('./routes/graph.js');

app.use('/api/users',users);
app.use('/api/graphs',graphs);
/*app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL. Ferid');
});*/

app.use(express.static(path.join( __dirname,'../client')));

app.listen(port,function(){
    console.log('Listen on localhost:',port);
})