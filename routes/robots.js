const express = require('express');
const routes = express.Router();
const db = require('../db');



routes.get('/', function(req, res) {
 let collection = db.get().collection('robots');
 collection.find({}).toArray((err, robots) => {
 res.render('home', {robots: robots});

  });

 });


routes.get('/:user', function(req, res) {
  let coll = db.get().collection('robots');
  coll.find({name: req.params.user}).toArray((err, robots) => {
    res.render('users', {
      robots: robots});
      console.log({name: req.params.user});
      console.log(robots[0].name);

    });
});



module.exports = routes;
