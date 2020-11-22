const mongoose = require('mongoose');

mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  () => console.log('Successfully connected to DB.')
);
