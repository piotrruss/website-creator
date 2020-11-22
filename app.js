const path = require("path");
const express = require("express");
// const cors = require('cors');
const cookieParser = require('cookie-parser');
require('./server/db/mongoose');
const userRoutes = require('./server/routes/user');
const auth = require('./server/middleware/auth');
const redirectIfLoggedIn = require('./server/middleware/redirectIfLoggedIn');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// app.use(cors());
app.use(cookieParser());

app.use('/api/user/', userRoutes);

app.use('/admin/', auth, express.static(path.join(__dirname, 'client/admin'), {
  setHeaders: function (res, path, stat) {
    if (res.req.newToken){
      res.set('Set-Cookie', "token=" + res.req.newToken + ";httpOnly;MaxAge=604800000;Path=/");
    }
  }
}));

app.use('/login/', redirectIfLoggedIn, express.static(path.join(__dirname, 'client/login')));

app.use('/', express.static(path.join(__dirname, 'client/public')));

app.get('*', (req, res) => res.redirect('/'));

app.listen(port, () => {
  console.log("Server is up on port " + port + ".");
});

