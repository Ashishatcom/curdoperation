var express = require('express');
var router = express.Router();
var  {Writer} = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('writerform')
});

router.post('/register', function  (req, res, next) {
    Writer.create({
    firstName : req.body.firstname,
    lastName : req.body.lastname,
    email :req.body.email
    }).then((docs)=>{
    res.render('novelform',{docs:docs})
   }).catch((err)=>{
     console.log(err)
   })
   
});
router.get('/novel', function(req, res, next) {
  res.render('novelform')
});
router.get('/getdata', function(req, res, next) {
   Writer.findAll({},(err,docs)=>{}).then((docs)=>{
  res.render('novelform',{ docs:docs })
}).catch((err)=>{
console.log(err)
})
});



router.get('/update', function(req, res, next) {
   Writer.findAll({},(err,docs)=>{}).then((docs)=>{
  res.render('button',{ docs:docs })
}).catch((err)=>{
console.log(err)
})
});

router.get('/edit/:id', function(req, res, next) {
   Writer.findByPk(req.params.id,(err,formdatas)=>{})
   .then((formdatas)=>{
  res.render('updatewriter',{ 
    id:formdatas.id,
    fname:formdatas.firstName,
    lname:formdatas.lastName,
    email:formdatas.email

    })
}).catch((err)=>{
console.log(err)
})
});



router.post('/updatedata/:id', function  (req, res, next) {
     const newData={ 
     id1: req.params.id,
     firstName : req.body.firstname,
     lastName : req.body.lastname,
     email : req.body.email
     };
     console.log(newData.id1)
     Writer.update(newData,{where:{id:newData.id1}})
    .then(updatedUser => {
         res.send("updatedUser");
     });
  
    });


router.get('/delet/:id', function(req, res, next) {

  const idel = req.params.id;
   Writer.destroy({
     where:{id:idel}
     }).then(deletUser => {
         res.send("deletUser");
     });
});


module.exports = router;