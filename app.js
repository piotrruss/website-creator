const path = require("path");
const express = require("express");
require('./server/db/mongoose');
const userRoutes = require('./server/routes/user');
const auth = require('./server/middleware/auth');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/user/', userRoutes);

app.use('/admin/', auth, express.static(path.join(__dirname, 'client/admin')));

app.use('/login/', express.static(path.join(__dirname, 'client/login')));

app.use('/', express.static(path.join(__dirname, 'client/public')));

app.get('*', (req, res) => res.redirect('/'));

app.listen(port, () => {
  console.log("Server is up on port " + port + ".");
});

