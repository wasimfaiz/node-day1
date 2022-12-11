const { response } = require('express');
var express = require('express');
const users = require('./users');
var router = express.Router();
var userModel = require('./users')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
// router.get('/edit', function(req, res) {
//   res.render('edit');
// });
router.get('/create', function(req, res) {
  userModel.create({
    name: req.query.name,
    profession: req.query.profession,
    dpimage: req.query.dpimage
  }).then(function(){
    res.redirect("read")
  })
});

router.get('/read', function(req, res) {
  userModel.find()
  .then(function(data){
    res.render("read", {data:data})
  })
});

router.get('/edituser/: iddhmfyud',  function(req,  res) {
  userModel.findOne({_id:req.params.iddhmfyud})
  .then(function(data){
    res.render("edituser", {data:data});
  })
});

// router.get('/update/: idd',  function(req,  res) {
//   userModel.findOneAndUpdate({_id:req.params.idd}, {name : req.query.name , profession: req.query.profession, dpimage:req.query.dpimage})
//   .then(function(data){
//     res.redirect("/read");
//   })
// });

module.exports = router;
