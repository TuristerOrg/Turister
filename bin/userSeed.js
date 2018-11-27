const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const bcryptSalt = 10;

const dbName = 'proyecto-2';
mongoose.connect(`mongodb://localhost/${dbName}`);

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const salt = bcrypt.genSaltSync(bcryptSalt);
const hashPass = bcrypt.hashSync('admin', salt);

const users = [
  {
    username: 'admin',
    password: `${hashPass}`,
    admin: true,
  },
];

User.create(users, (err) => {
  if (err) { throw (err); }
  console.log('Created Admin User');
  mongoose.connection.close();
});
