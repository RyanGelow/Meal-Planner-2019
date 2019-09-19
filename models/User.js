const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const validator = require('validator');

// const validateName = function(name){
//   return validator.isAlpha(name);
// };

const validateEmail = function(email){
  return validator.isEmail(email);
};

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate: [
      validateEmail,
      'Please enter a valid email address'
    ]
  },
  password: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true,
},
  weight: {
    type: Number,
    required: true,
},
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  activity_level: {
    type: String,
    required: true,
  },
  calories:{
    type: Number,
    required: true,
  },
  protein:{
    type: Number,
    required: true,
  },
  fat:{
    type: Number,
    required: true,
  },
  carb:{
    type: Number,
    required: true,
  }
});

UserSchema.pre('save', async function(next){
  const user = this;
  try {
    const salt = await bcrypt.genSalt();
    console.log('salt', salt);
    const hash = await bcrypt.hash(user.password, salt);
    console.log('hash', hash);
    user.password = hash;
    next();
  } catch(e) {
    return next(e);
  }
});

UserSchema.methods.comparePassword = async function(candidatePassword, callback){
  const user = this;
  try {
    const isMatch = await bcrypt.compare(candidatePassword, user.password);
    callback(null, isMatch);
  } catch(e) {
    callback(e);
  }
};


const User = mongoose.model('User', UserSchema);

module.exports = User;