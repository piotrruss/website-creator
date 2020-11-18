const jwt = require('jsonwebtoken');
const User = require('../models/User');

const redirectIfLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.token || '';

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, 'replaceThisWithSecretString');
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!user) {
      throw new Error();
    }

    res.redirect('/admin');
  } catch (err) {
    next();
  }
};

module.exports = redirectIfLoggedIn;
