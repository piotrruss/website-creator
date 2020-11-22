const path = require("path");
const express = require("express");
const cookieParser = require('cookie-parser');
// const cors = require('cors');
require('dotenv-safe').config();
require('./server/db/mongoose');
const setCookie = require('./server/helpers/setCookie');
const userRoutes = require('./server/routes/user');
const auth = require('./server/middleware/auth');
const redirectIfLoggedIn = require('./server/middleware/redirectIfLoggedIn');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
// app.use(cors());

app.use('/api/user/', userRoutes);

app.use('/admin/', auth, express.static(
  path.join(__dirname, 'client/admin'),
  { setHeaders: setCookie }
));

app.use('/login/', redirectIfLoggedIn, express.static(
  path.join(__dirname, 'client/login')
));

app.use('/', express.static(
  path.join(__dirname, 'client/public')
));

app.get('*', (req, res) => res.redirect('/'));

app.listen(port, () => {
  console.log("Server is up on port " + port + ".");
});

