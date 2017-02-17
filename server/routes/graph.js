var express=require('express');
var router = express.Router();
var graph=require('../modeles/graph.js');

router.get('/',function(req,res){
   res.send(JSON.stringify(graph));
})

module.exports=router;