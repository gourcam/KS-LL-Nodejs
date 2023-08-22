const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Hello from Index');
});

module.exports = router;
