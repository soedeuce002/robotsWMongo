
let express = require('express');
let expressHandlebars = require('express-handlebars');
let bodyParser = require('body-parser');
const db = require("./db");

const app = express();

app.engine('handlebars', expressHandlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

let url = 'mongodb://localhost:27017/newdb'

app.use('/', require('./routes/robots'));

//boilerplate
db.connect(url, (err, connection) => {
  if(!err)
    console.log('connected to Mongo');
  app.listen(3000, ()=>
console.log('up and running'));
});
