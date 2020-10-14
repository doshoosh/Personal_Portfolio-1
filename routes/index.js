var express = require('express');
var router = express.Router();

/* GET Home page page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('aboutme', { title: 'About me' });
});

router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

router.get('/services', function(req, res, next) {
  res.render('servicespage', { title: 'Services' });
});

router.get('/contact', function(req, res, next) {
  res.render('contactme', { title: 'Contact me' });
});
module.exports = router;
