const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  user: {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
  },
  refreshToken: {
    type: String,
    required: true
  },
  lastAccess: {
    type: Date,
    default: Date.now(),
    index: { expires: 90 }
  }
});

module.exports = mongoose.model('Session', sessionSchema);

