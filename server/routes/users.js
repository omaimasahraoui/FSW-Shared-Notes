var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var users = require('../modeles/users.js');

var router = express.Router();


// Add User to database
router.post('/', function (req, res) {
    var user = new userModel();
    user.name = req.body.name;
    user.email = req.body.email;
    user.mdp = req.body.mdp;
    user.avatar = req.body.avatar;

    user.save(function (err) {
        if (err)
            res.send(err);
        res.json({ message: 'User added to the Users Collection!', data: user });
    })
});

//Get All Users from Database

router.get('/all', function (req, res) {
    userModel.find(function (err, users) {
        if (err) res.send(err);
        res.send(users);
    })
})

//Get One User by his id (mongo id)

router.get('/:id', function (req, res) {
    var _id = req.params.id;
    userModel.findById(_id, function (err, user) {
        if (err) res.send(err);
        res.send(user);
    })
})


// Update User
router.put('/:id', function (req, res) {
    var _id = req.params.id;
    userModel.findById(_id, function (err, user) {
        if (err) res.send(err);
        user.name = req.body.name;
        user.email = req.body.email;
        user.mdp = req.body.mdp;
        user.avatar = req.body.avatar;
        user.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'User updated successfully !', data: user });
        })
    })
})


// Remouve User from db

router.delete('/:id', function (req, res) {
    var _id = req.params.id;
    userModel.findByIdAndRemove(_id, function (err) {
        if (err) res.send(err);
        res.json({message:'User rmouved succesufully !'});
    })
})

module.exports = router;