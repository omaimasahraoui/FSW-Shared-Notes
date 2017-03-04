var express=require('express');
var mongoose=require('mongoose');
userModel=require('./users.js');

var schema=mongoose.Schema;

var graphSchema=new schema({
    owner :{type:schema.ObjectId,ref:"userModel"},
    create_date:{type:Date,default: Date.now},
    posts:[{type:schema.ObjectId,ref:"Post"}]
});


module.exports=mongoose.model("Graph",graphSchema);

