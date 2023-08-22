const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Hello from news');
});


router.get('/lastest',function(req, res) {
  res.send('Son haberleri alıyorsunuz');
});


module.exports = router;
