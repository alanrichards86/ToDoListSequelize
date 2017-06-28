const model = require('../models');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.redirect('/TheList');
});

router.get('/TheList', function(req, res){
  res.render('main');
});

router.post('/', function(req, res){
  var listTask = model.list.build({
    name: req.body.inputField,
    completed: false
  });
  listTask.save().then(function(){
    res.redirect('/TheList');
  })
});


// todo.save().then(function (newTodo) {
//   console.log(newTodo.id);
// })






module.exports = router;
