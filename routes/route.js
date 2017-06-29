const models = require('../models');
const express = require('express');
const router = express.Router();
// const clickComplete = document.getElementsByClassName("completeButton").addEventListener('click', completeMe);

router.get('/', function(req, res){
  res.redirect('/TheList');
});

router.get('/TheList', function(req, res){
  models.list.findAll().then(function(data){
    //This renders my mustache page and gives me access to
    //the data from my form
    res.render('main', {theStuff: data});
  });

});

// const idFind = function(req, res, next){
//   console.log(req.body.deleteIt);
//   models.list.findById(req.params.unique).then(function(grabIt){
//     if(grabIt){
//       req.grabIt = grabIt;
//         next();
//     }
//     // else {
//     //   res.status(404).send("Not Found");
//     // }
//   });
// }

 // This takes the inputField data and give it a variable
 // that can be passed into things
router.post('/', function(req, res){
  var data = {
    name: req.body.inputField,
    completed: false
  }
  //How I saved the input information to the SQL table
  var listTask = models.list.build(data);
  listTask.save().then(function(){
    res.redirect('/TheList');
  })
});

router.post('/TheList/delete', function(req, res){
    models.list.destroy(req.body.deleteIt).then(function() {
      res.redirect("/");
    });
});


// todo.save().then(function (newTodo) {
//   console.log(newTodo.id);
// })






module.exports = router;
