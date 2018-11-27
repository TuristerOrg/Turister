const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const monumentoSchema = new Schema({
  name: String,
  description: String,
  type: String,
  location: { type: { type: String },
  coordinates: [Number]
}
}, {
  timestamps: true
});

const Monumento = mongoose.model("Place", monumentoSchema);
module.exports = Monumento;