const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token || '';

    if (!token) {
      throw new Error();
    }

    try {
      const decoded = jwt.verify(token, 'replaceThisWithSecretString');
      req.userId = decoded._id;
      req.refreshToken = decoded.ref;
      return next();
    } catch(er) {
      if (er.message && er.message === 'jwt expired') {
        const { _id, ref } = jwt.decode(token, 'replaceThisWithSecretString');
        const user = await User.findById(_id);

        if (!user) {
          throw new Error();
        }

        if (user.sessions.filter(s => s.ref === ref).length > 0) {
          req.userId = _id;
          req.refreshToken = ref;
          req.newToken = await user.generateJwtToken(res.req.refreshToken);;
          return next();
        }

        throw new Error();
      }

      throw new Error();
    }
  } catch (err) {
    res.redirect('/login');
  }

};

module.exports = auth;
