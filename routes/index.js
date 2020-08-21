const express = require('express');

const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(users);
  res.render('index', { title: 'Ola mundo' });
});

// exports.route = routes;
module.exports = router;