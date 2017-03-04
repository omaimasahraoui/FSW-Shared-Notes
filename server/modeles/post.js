var express=require('express');
var mongoose=require('mongoose');
userModel=require('./users.js');

var schema=mongoose.Schema;

var postSchema=new schema({
    title :{type:String},
    cover_url:String,
    corps:String,
    author:{type:schema.ObjectId,ref:"userModel"},
   // graph :{type:schema.ObjectId,ref:"Graph"}

});

module.exports=mongoose.model('Post',postSchema);