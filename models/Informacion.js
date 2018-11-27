const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const informacionSchema = new Schema({
  name: String,
  description: String,
  type: String,
  location: { type: { type: String },
  coordinates: [Number]
}
}, {
  timestamps: true
});

const Informacion = mongoose.model("Informacion", informacionSchema);
module.exports = Informacion;