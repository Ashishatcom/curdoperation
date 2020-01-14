var express = require('express');
var router = express.Router();
var  {Novel} = require('../models');
/* GET users listing. */


router.post('/register', function(req, res, next) {
    Novel.create({
        Novelname : req.body.novname,
        wirid :   req.body.wirid
    }).then((data)=>{
       res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
    console.log(req.body)
  });



module.exports = router;