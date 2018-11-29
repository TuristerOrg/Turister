require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const bcryptSalt = 10;

mongoose.connect(process.env.DBURL);

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
