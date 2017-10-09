var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Hello');
  console.log(__dirname);
  res.sendFile('/Users/schindler/Development/Salaryo/react-backend/public/login_page.html');
});

module.exports = router;
