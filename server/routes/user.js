const router = require('express').Router();
const User = require('../models/User');
const Session = require('../models/Session');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');

router.get('/me', auth, (req, res) => {
  if (req.loggedUser) {
    console.log(req.loggedUser)
    return res.json(req.loggedUser);
  }

  return res.clearCookie('token').redirect('/login');
})

router.post('/register', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send({ email: user.email });
  } catch(err) {
    if (err._message) {
      res.status(422).send(err._message);
    } else if (err.code && err.code === 11000) {
      res.status(409).send('User with this email already exist');
    } else {
      res.status(400).send('Could not save the user');
    }
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    if (!user) {
      throw new Error();
    }

    const session = new Session({ userId: user._id });
    await session.save();

    const publicUserData = {
      userId: user.id,
      email: user.email,
      language: user.language
    };

    const token = session.generateJwtToken(publicUserData);

    res
      .cookie('token', token, {
        maxAge: (1000 * parseInt(process.env.COOKIE_MAX_AGE)),
        secure: false,
        httpOnly: true,
      })
      .status(204)
      .send();
  } catch (err) {
    res.status(401).send('Could not login');
  }
});

router.post('/logout', auth, async (req, res) => {
  try {
    await Session.findByIdAndRemove(req.sessionId);
    res
      .clearCookie('token')
      .status(204)
      .send();
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
