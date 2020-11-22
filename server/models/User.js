const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const randtoken = require('rand-token');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    min: 4,
    max: 255,
    validate(value) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        throw new Error('Wrong email address');
      }
    }
  },
  password: {
    type: String,
    required: true,
    min: 4,
    max: 1024,
  },
  sessions: [{
    ref: {
      type: String,
      required: true
    }
  }]
});

userSchema.methods.generateJwtToken = async function (currentRef) {
  const ref = currentRef ? currentRef : randtoken.uid(256);

  if (!currentRef) {
    this.sessions = this.sessions.concat({ ref });
    this.save();
  }

  return jwt.sign(
    { _id: this._id.toString(), ref },
    'replaceThisWithSecretString',
    { expiresIn: 300 }
  );
}

userSchema.methods.endSession = async function (ref) {
  this.sessions = this.sessions.filter((session) => {
    return session.ref !== ref;
  });

  await this.save();
  return null;
}

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('Unable to login');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Unable to login');
  }

  return user;
}

userSchema.pre('save', async function(next){
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;
