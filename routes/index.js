const express = require('express');
const passport = require('passport');
const axios = require('axios')
const router  = express.Router();
const Place = require("../models/Place")
/* GET home page */


router.get('/', (req, res, next) => {
  axios.get('https://datos.madrid.es/egob/catalogo/201105-0-informacion-turismo.json')
      .then(response => {
        console.log(response.data['@graph']);
        res.render('index', {response : JSON.stringify(response.data['@graph'])});
      })
      .catch(errGetAPI => {
        console.log(errGetAPI);
      });
 
});

router.get("/addplace", (req, res, next) => {
  res.render("add/place");
});

router.post('/addplace', (req, res, next) => {

  let currentPlace = {
    name: req.body.placename,
    description: req.body.placedescription,
    type: req.body.placetype,
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
