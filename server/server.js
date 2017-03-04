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
var posts=require('./routes/post.js')

app.use('/api/users',users);
app.use('/api/graphs',graphs);
app.use('/api/posts',posts)
app.use(express.static(path.join( __dirname,'../client')));

app.listen(port,function(){
    console.log('Listen on localhost:',port);
})