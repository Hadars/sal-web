var express = require('express');
var router = express.Router();
var db  = require('../db');


function DBGetUsers(username) {
  db.get().query('SELECT * FROM users', function(err, rows, fields) {
    if (err) throw err;
    console.log('\x1b[33m%s\x1b[0m', "QUERY: 'SELECT * FROM users'");
    console.log('\x1b[32m%s',"RESULT: ", JSON.stringify(rows), "\x1b[0m");
    console.log(`\x1b[31mNumber of rows:\x1b[35m ${rows.length} \x1b[0m\n`)
    return JSON.stringify(rows)
  });
}

function DBGetUser(username, successCallback) {
  const queryStr = `SELECT * FROM users WHERE username = \'${username}\' LIMIT 1`;
  db.get().query(queryStr, function(err, rows, fields) {
    if (err) throw err;
    console.log('\x1b[33m%s\x1b[0m', `QUERY: ${queryStr}`);
    console.log('\x1b[32m%s',"RESULT: ", JSON.stringify(rows), "\x1b[0m\n");
    successCallback(rows[0])
  });
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  DBGetUsers();
  DBGetUser('hadar', function success(user){
    res.render('users', { title: `USER PAGE FOR ${user.username}`, email: user.email });
  });
});

module.exports = router;
