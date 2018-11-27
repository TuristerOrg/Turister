const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const iglesiaSchema = new Schema({
  name: String,
  description: String,
  type: String,
  location: { type: { type: String },
  coordinates: [Number]
}
}, {
  timestamps: true
});

const Iglesia = mongoose.model("Iglesia", iglesiaSchema);
module.exports = Iglesia;