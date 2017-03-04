var express = require('express');
var router = express.Router();
var User = require('../modeles/users.js');
var Graph = require('../modeles/graph.js');
var Post = require('../modeles/post.js')
var ObjectId=require('mongoose').Types.ObjectId;


var router = express.Router();


// Add Post to database

router.post('/', function (req, res) {
    var post = new Post();
    post.title = req.body.title;
    post.cover_url = req.body.cover_url;
    post.corps = req.body.corps;
    post.author = req.body.author;
    post.graph=new ObjectId(req.body.graph);
    post.save(function (err) {
        if (err)
            res.send(err);
        res.json({ message: 'Post Ref added !', data: post });
    })
});

//Get All post from Database

router.get('/', function (req, res) {
    Post.find(function (err, posts) {
        if (err) res.send(err);
        res.send(posts);
    })
})

//Get One Post by his id (mongo id)

router.get('/:id', function (req, res) {
    var _id = req.params.id;
    Post.findById(_id, function (err, post) {
        if (err) res.send(err);
        res.send(post);
    })
})


// Update Graph
router.put('/:id', function (req, res) {
    var _id = req.params.id;
    Post.findById(_id, function (err, post) {
        if (err) res.send(err);
        post.title = req.body.title;
        post.cover_url = req.body.cover_url;
        post.corps = req.body.corps;
        post.author = req.body.author;

        post.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'Post updated Successfully !', data: graph });
        })
    })
})


// Remouve Graph from db

router.delete('/:id', function (req, res) {
    var _id = req.params.id;
    Post.findByIdAndRemove(_id, function (err) {
        if (err) res.send(err);
        res.json({ message: 'Post remouved succesufully !' });
    })
})

module.exports = router;