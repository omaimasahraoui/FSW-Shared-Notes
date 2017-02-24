var express=require('express');
var mongoose=require('mongoose');

var userSchema=new mongoose.Schema({
    name: String,
    email: String,
    mdp: String,
    avatar: String
});


module.exports=mongoose.model('userModel',userSchema);
