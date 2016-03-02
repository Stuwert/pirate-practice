var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/pirates', function(req, res, next) {

  Pirates().select().then(function(pirates){
    res.send(pirates);
  })

});

router.post('/pirates/new', function(req, res, next){

  Pirates().insert(req.body).then(function(){
    res.send('Congrats!')
  })

})

function Pirates(){
  return knex('pirates')
}

module.exports = router;
