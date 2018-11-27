
const express = require('express');
const passport = require('passport');

const router  = express.Router();
const Place = require('../models/Place');

router.get('/', (req, res, next) => {
  Place.find({}).then((place) => {
    res.render('index', { places : JSON.stringify(place) });
  });
});

router.get('/addplace', (req, res, next) => {
  res.render('add/place');
});

router.post('/addplace', (req, res, next) => {
  const currentPlace = {
    name: req.body.name,
    description: req.body.description,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)],
    },
  };
  Place.create(currentPlace).then((currentPlace) => {
    res.redirect('/');
  }).catch(e => next(e));
});

module.exports = router;
