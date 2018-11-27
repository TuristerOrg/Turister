<<<<<<< HEAD

const express = require('express');
const passport = require('passport');

const router  = express.Router();
const Place = require('../models/Place');

router.get('/', (req, res, next) => {
  Place.find({}).then((place) => {
    res.render('index', { places : JSON.stringify(place) });
  });
=======
const express = require("express");
const passport = require("passport");
const axios = require("axios");
const router = express.Router();
const Place = require("../models/Place");
/* GET home page */

router.get("/", (req, res, next) => {
  
  //   let petition = new Promise ((resolve, rej)=>{
  //   peticiones()
  //   resolve('success')
  // })

  // petition.then(response =>{
    Place.find().then(response => {
      console.log(response)
        res.render("index", {response: JSON.stringify(response)})
        })
      .catch(errGetAPI => {
        console.log(errGetAPI);
      });
  // })
>>>>>>> e5c39dd7b70cdc5afec5e9602266575e43f2f3fd
});

router.get('/addplace', (req, res, next) => {
  res.render('add/place');
});

<<<<<<< HEAD
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
=======
router.post("/addplace", (req, res, next) => {
  let currentPlace = {
    name: req.body.placename,
    description: req.body.placedescription,
    type: req.body.placetype,
    location: {
      type: "Point",
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  };
  // console.log(currentPlace);
  Place.create(currentPlace)
    .then(currentPlace => {
      res.redirect("/");
    })
    .catch(e => next(e));
>>>>>>> e5c39dd7b70cdc5afec5e9602266575e43f2f3fd
});

// let petitionAJAX = (url, tipo) => {
//   axios
//     .get(url)
//     .then(response => {
//       response.data["@graph"].forEach(element => {
//         if(element.location!=undefined){
//         let currentMonument = {
//           name: element.title,
//           description: element.organization["organization-desc"],
//           type: tipo,
//           location: {
//             type: "Point",
//             coordinates: [
//               Number(element.location.latitude),
//               Number(element.location.longitude)
//             ]
//           }
//         };
//         Place.create(currentMonument).catch(e =>
//           console.log(`Error in element${element.name}`)
//         );
//         }else{
//           return
//         }
//       });
//     })
//     .catch(errGetAPI => {
//       console.log(errGetAPI);
//     });
// };

// let peticiones = ()=>{
// Place.collection.drop()

//   petitionAJAX(
//     "https://datos.madrid.es/egob/catalogo/201105-0-informacion-turismo.json","informacion"
//   );
//   petitionAJAX(
//     "https://datos.madrid.es/egob/catalogo/208844-0-monumentos-edificios.json","monumento"
//   );
//   petitionAJAX(
//     "https://datos.madrid.es/egob/catalogo/209426-0-templos-catolicas.json","iglesia"
//   );
//   petitionAJAX(
//     "https://datos.madrid.es/egob/catalogo/201132-0-museos.json","museo"
//   );
// }

module.exports = router;
