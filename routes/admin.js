/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const express = require('express');
const passport = require('passport');
const axios = require('axios');
const User = require('../models/User');

const router = express.Router();
const Place = require('../models/Place');

function checkRoles(rol) {
  return function (req, res, next) {
    if (req.isAuthenticated() && req.user.admin === rol) {
      return next();
    }
    res.redirect('/');
  };
}
const checkAdmin = checkRoles(true);

router.get('/controlPanel', checkAdmin, (req, res) => {
  res.render('admin/adminPanel', { user : req.user });
});

router.get('/deleteUser', checkAdmin, (req, res) => {
  res.render('admin/deleteUser');
});

router.post('/deleteUser', (req, res, next) => {
  User.findOneAndRemove({ username: req.body.username })
    .then(() => res.redirect('/'))
    .catch(err => next(err));
});

router.get('/deleteLocation', checkAdmin, (req, res) => {
  res.render('admin/deleteLocation');
});

router.post('/deleteLocation', (req, res, next) => {
  Place.findOneAndRemove({ name: req.body.name })
    .then(() => res.redirect('/'))
    .catch(err => next(err));
});

module.exports = router;
