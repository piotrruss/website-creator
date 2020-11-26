const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Session = require('../models/Session');

const redirectLogged = async (req, res, next) => {
  try {
    const token = req.cookies.token || '';
    if (!token) {
      throw new Error();
    }

    try {
      const token = jwt.verify(token, process.env.JWT_SECRET);
      if (!token.user || !token.user.userId){
        throw new Error();
      }
      return res.redirect('/admin');
    } catch(er) {
      if (er.message && er.message === 'jwt expired') {
        const {sessionId, user} = jwt.decode(token);
        const userData = JSON.parse(user);
        const session = await Session.findById(sessionId);

        if (!session || session.userId.toString() !== userData.userId) {
          throw new Error();
        }

        session.setAccessDate();
        const newToken = session.generateJwtToken(userData);

        return res
          .cookie('token', newToken, {
            maxAge: parseInt(process.env.COOKIE_MAX_AGE),
            secure: false,
            SameSite: 'Strict',
            httpOnly: true,
          })
          .redirect('/admin');
        throw new Error();
      }

      throw new Error();
    }
  } catch (err) {
    return next();
  }

};

module.exports = redirectLogged;
