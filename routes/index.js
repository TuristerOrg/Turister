const express = require('express');
const passport = require('passport');
const router  = express.Router();
const Place = require("../models/Place")
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/addplace", (req, res, next) => {
  res.render("add/place");
});

router.post('/addplace', (req, res, next) => {

  let currentPlace = {
    name: req.body.name,
    description: req.body.description,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  }
  console.log(currentPlace);
  Place.create(currentPlace).then( currentPlace => {
    res.redirect('/');
  }).catch(e=> next(e));
});

module.exports = router;
