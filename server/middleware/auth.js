const jwt = require('jsonwebtoken');
const Session = require('../models/Session');

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token || '';

    if (!token) {
      throw new Error();
    }

    try {
      const {sessionId, user} = jwt.verify(token, process.env.JWT_SECRET);
      req.sessionId = sessionId;
      req.loggedUser = JSON.parse(user);
      return next();

    } catch(er) {
      if (er.message && er.message === 'jwt expired') {
        const {sessionId, user} = jwt.decode(token);
        const userData = JSON.parse(user);
        const session = await Session.findById(sessionId);

        if (!session || session.userId.toString() !== userData.userId) {
          throw new Error();
        }

        session.setAccessDate();
        req.newToken = session.generateJwtToken(userData);;
        req.sessionId = sessionId;
        req.loggedUser = userData;
        return next();
      }

      throw new Error();
    }
  } catch (err) {
    res.redirect('/login');
  }

};

module.exports = auth;
