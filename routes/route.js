const models = require('../models');
const express = require('express');
const router = express.Router();

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

router.post('/TheList/Complete', function(req, res){
  models.list.findById(req.body.completeIt).then(function(completeTask){
    completeTask.completed = true;
    console.log(completeTask.completed);
    completeTask.save();
    res.redirect('/');
  })
})

router.post('/TheList/delete', function(req, res){
  models.list.findById(req.body.deleteIt).then(function(theTask){
    theTask.destroy().then(function(){
      res.redirect('/TheList');
    })
  })
});



module.exports = router;


            //CODE THAT I HAVE REMOVED THAT I MIGHT STILL NEED




// todo.save().then(function (newTodo) {
//   console.log(newTodo.id);
// })

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
