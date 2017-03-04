var express=require('express');
var router = express.Router();
var User=require('../modeles/users.js');
var Graph=require('../modeles/graph.js');
var Post=require('../modeles/post.js');
var ObjectId = require('mongoose').Types.ObjectId; 


var router = express.Router();

// Add graph to database
router.post('/', function (req, res) {
    var graph = new Graph();
    graph.owner = req.body.owner;
    graph.create_date=req.body.date;
    graph.save(function (err) {
        if (err)
            res.send(err);
        res.json({ message: 'Graph + Owner + Posts Ref added !', data: graph });
    })
});


//Get All graphs from Database

router.get('/', function (req, res) {
    Graph.find(function (err, graphs) {
        if (err) res.send(err);
        res.send(graphs);
    })
})


//Get One Graph by his id (mongo id)

router.get('/:id', function (req, res) {
    var _id = req.params.id;
    Graph.findById(_id, function (err, graph) {
        if (err) res.send(err);
        res.send(graph);
    })
})


// Update Graph
router.put('/:id', function (req, res) {
    var _id = req.params.id;
    Graph.findById(_id, function (err, graph) {
        if (err) res.send(err);
        Graph.owner = req.body.id;
        Graph.create_date = req.body.date;
      
        Graph.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'Graph updated successfully !', data: graph });
        })
    })
})


// Remouve Graph from db

router.delete('/:id', function (req, res) {
    var _id = req.params.id;
    Graph.findByIdAndRemove(_id, function (err) {
        if (err) res.send(err);
        res.json({message:'graph remouved succesufully !'});
    })
})


module.exports=router;