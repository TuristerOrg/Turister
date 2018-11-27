const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const museoSchema = new Schema({
  name: String,
  description: String,
  type: String,
  location: { type: { type: String },
  coordinates: [Number]
}
}, {
  timestamps: true
});

const Museo = mongoose.model("Museo", museoSchema);
module.exports = Museo;