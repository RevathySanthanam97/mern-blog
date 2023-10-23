const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
})

userSchema.statics.login = async function(username, email, password) {
  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect Email')
  }
  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Invalid Credentials or Wrong Password')
  }
  return user
}

userSchema.statics.signup = async function(username, email, password) {
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error('Email already in use');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, email, password: hash});

  return user
}

module.exports = mongoose.model('User', userSchema);
