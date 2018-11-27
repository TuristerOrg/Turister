// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Place = require("../models/Place");
const axios = require("axios");
const bcryptSalt = 10;


mongoose
  .connect(
    "mongodb://localhost/proyecto-2",
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

let users = [
  {
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt))
  }
];

const petitionAJAX = (url, tipo) => {
  return axios
    .get(url)
    .then(response => {
      
      return Promise.all(response.data["@graph"].map(element => {
        if (element.location != undefined) {
          let currentMonument = {
            name: element.title,
            description: element.organization["organization-desc"],
            type: tipo,
            location: {
              type: "Point",
              coordinates: [
                Number(element.location.latitude),
                Number(element.location.longitude)
              ]
            }
          };
          return Place.create(currentMonument).catch(e =>
            console.log(`Error in element${element.name}`, e)
          );
        } else {
          return;
        }
      }));
    })
    .catch(errGetAPI => {
      console.log(errGetAPI);
    });
};


User.deleteMany()
  .then(() => {
    return User.create(users);
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    return Place.collection.drop();
    // Close properly the connection to Mongoose
  })
  .then(() => {
    return Promise.all([
      petitionAJAX(
        "https://datos.madrid.es/egob/catalogo/201105-0-informacion-turismo.json",
        "informacion"
      ),
      petitionAJAX(
        "https://datos.madrid.es/egob/catalogo/208844-0-monumentos-edificios.json",
        "monumento"
      ),
      petitionAJAX(
        "https://datos.madrid.es/egob/catalogo/209426-0-templos-catolicas.json",
        "iglesia"
      ),
      petitionAJAX(
        "https://datos.madrid.es/egob/catalogo/201132-0-museos.json",
        "museo"
      )
    ]);
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
