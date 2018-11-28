const mongoose = require('mongoose');

const Schema   = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  description: String,
  type: { type: String, enum: ['museo', 'monumento', 'iglesia', 'informacion'] },
  web: String,
  location: {
    type: { type: String },
    coordinates: [Number],
  },
}, {
  timestamps: true,
});

const Place = mongoose.model('Place', placeSchema);
module.exports = Place;
