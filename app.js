const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const path = require('path');
const session = require('express-session');
const validator = require('express-validator');
const myRoutes = require('./routes/route.js');
const morgan = require("morgan");

const app = express();

app.use(express.static(path.join(__dirname, 'public')));



app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(validator());
app.use(morgan('dev'));

app.use(session({
  secret: 'I Love Pie',
  resave: false,
  saveUninitialized: false
}));


app.use('/',myRoutes);

app.listen(3000, function(req, res){
  console.log('Party Time !');
});
