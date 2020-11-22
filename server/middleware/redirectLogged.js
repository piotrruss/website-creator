const jwt = require('jsonwebtoken');
const User = require('../models/User');

const redirectLogged = async (req, res, next) => {
  try {
    const token = req.cookies.token || '';

    if (!token) {
      throw new Error();
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      res.redirect('/admin');
    } catch(er) {
      if (er.message && er.message === 'jwt expired') {
        const { _id, ref } = jwt.decode(token, process.env.JWT_SECRET);
        const user = await User.findById(_id);

        if (!user) {
          throw new Error();
        }

        if (user.sessions.filter(s => s.ref === ref).length > 0) {
          const newToken = await user.generateJwtToken(ref);;
          res
            .cookie('token', token, {
              maxAge: parseInt(process.env.COOKIE_MAX_AGE),
              secure: false,
              httpOnly: true,
            })
            .redirect('/admin');
        }

        throw new Error();
      }

      throw new Error();
    }
  } catch (err) {
    return next();
  }

};

module.exports = redirectLogged;
