const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const sessionSchema = new mongoose.Schema({
  userId: {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
  },
  lastAccess: {
    type: Date,
    default: Date.now(),
    index: { expires: parseInt(process.env.DB_SESSION_MAX_AGE) }
  }
});

sessionSchema.methods.setAccessDate = function (user) {
  this.lastAccess = Date.now();
  this.save();
}

sessionSchema.methods.generateJwtToken = function (user) {
  return jwt.sign(
    { sessionId: this._id.toString(), user: JSON.stringify(user) },
    process.env.JWT_SECRET,
    { expiresIn: parseInt(process.env.JWT_TOKEN_MAX_AGE) }
  );
};

module.exports = mongoose.model('Session', sessionSchema);

