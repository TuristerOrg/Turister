const mongoose = require('mongoose');
const Place = require('../models/Place');

mongoose.connect(rocess.env.DBURL);

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const places = [
  {
    name: 'Plaza 1',
    descripton: 'Plaza 1 desc',
    type: 'museo',
    location: {
      type: 'Point',
      coordinates: [randomIntFromInterval(-90, 90), randomIntFromInterval(-180, 180)],
    },
  },
  {
    name: 'Plaza 2',
    descripton: 'Plaza 1 desc',
    type: 'museo',
    location: {
      type: 'Point',
      coordinates: [randomIntFromInterval(-90, 90), randomIntFromInterval(-180, 180)],
    },
  },
  {
    name: 'Plaza 3',
    descripton: 'Plaza 1 desc',
    type: 'museo',
    location: {
      type: 'Point',
      coordinates: [randomIntFromInterval(-90, 90), randomIntFromInterval(-180, 180)],
    },
  },
  {
    name: 'Plaza 4',
    descripton: 'Plaza 1 desc',
    type: 'museo',
    location: {
      type: 'Point',
      coordinates: [randomIntFromInterval(-90, 90), randomIntFromInterval(-180, 180)],
    },
  },
  {
    name: 'Plaza 5',
    descripton: 'Plaza 1 desc',
    type: 'museo',
    location: {
      type: 'Point',
      coordinates: [randomIntFromInterval(-90, 90), randomIntFromInterval(-180, 180)],
    },
  },
];

Place.create(places, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${places.length} locations`);
  mongoose.connection.close();
});
