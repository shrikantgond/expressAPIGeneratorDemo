var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/books', function(req, res, next) {
  res.json({books: [
        {name: 'Applied Science 1'},
        {name: 'Applied Science 1'}
    ]});
});

module.exports = router;
