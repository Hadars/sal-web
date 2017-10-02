var express = require('express');
var router = express.Router();
var db  = require('../db');


function getUserDB(username, done) {
  // db.get().query('SELECT * FROM users WHERE username = ? LIMIT 1', [username], function(err, rows, fields) {
  console.log('db:');
  console.log(db);
  db.get().query('SELECT * FROM users', [username], function(err, rows, fields) {
    if (err) throw err;
    // console.log(rows[0]);
    done(rows[0]);
  });
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  getUserDB('hadar', function(args) {console.log(args);});
  res.render('index', { title: 'USERS' });
});

module.exports = router;
