var express=require('express');
var router = express.Router();
var users =require('../modeles/users.js');
var friends = require('../modeles/users.js');


router.get('/allUsers',function(req,res){
    console.log(users);
   res.send(JSON.stringify(users));
})

router.get('/allFriends',function(req,res){
   res.send(JSON.stringify(users));
})

router.get('/:id',function(req,res){
    var _id=parseInt(req.params.id);
    var theUser={};
    for(var i=0;i<users.length;i++){
        if(users[i].id=_id){
          theUser=users[i];
        }
    }
   
    console.log(theUser,_id);
   res.send(JSON.stringify(theUser));
})


module.exports=router;