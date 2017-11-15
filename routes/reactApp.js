var express = require('express')
var router = express.Router()
var path = require('path');
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  // res.sendFile(path.join(__dirname, '../public/', 'login_page.html'));
});

// // define the home page route
// router.get('/', function (req, res) {
//   res.send('api home page')
// })
// // define the about route
// router.get('/about', function (req, res) {
//   res.send('About api')
// })

module.exports = router