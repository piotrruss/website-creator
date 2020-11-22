const router = require('express').Router();
const User = require('../models/User');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');

router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json({ email: user.email });
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
    const token = await user.generateJwtToken();
    res
      .cookie('token', token, {
        maxAge: 604800000,
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
    const user = await User.findById(req.userId);
    await user.endSession(req.refreshToken);
    res
      .clearCookie('token')
      .status(204)
      .send();
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
