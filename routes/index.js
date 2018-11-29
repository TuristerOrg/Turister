/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const express = require('express');
const passport = require('passport');
const axios = require('axios');

const router = express.Router();
const Place = require('../models/Place');


router.get("/", (req, res, next) => {
  if (!req.user) {
    Place.find({}).then((response) => {
      res.render('index', { response: JSON.stringify(response) });
    })
      .catch((errGetAPI) => {
        console.log(errGetAPI);
      });
    }
    if (req.user) {
      Place.find({}).then((response) => {
        res.render('index', { response: JSON.stringify(response), userName:req.user.username, userAdmin: req.user.admin });
      })
        .catch((errGetAPI) => {
          console.log(errGetAPI);
        });
    }
});

router.post("/", (req, res, next) => {

    Place.find({ $or: [ { type:req.body.informacion}, { type:req.body.iglesia },{ type:req.body.monumento}, { type:req.body.museo }] })
      .then(response => {
        res.render("index", {response: JSON.stringify(response)})
        })
      .catch(errGetAPI => {
        console.log(errGetAPI);
      });
});

router.get('/addplace', (req, res, next) => {
  res.render('add/place');
});

router.post('/addplace', (req, res, next) => {
  const currentPlace = {
    name: req.body.placename,
    description: req.body.placedescription,
    type: req.body.placetype,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)],
    },
  };
  // console.log(currentPlace);
  Place.create(currentPlace)
    .then((currentPlace) => {
      res.redirect('/');
    })
    .catch(e => next(e));
});


module.exports = router;
