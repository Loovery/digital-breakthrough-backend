const mongoose = require('mongoose');

require('dotenv').config();

const {
  MONGO_DB_USERNAME,
  MONGO_DB_PASSWORD,
  MONGO_DB_HOSTNAME,
  MONGO_DB_PORT,
  MONGO_DB_NAME,
} = process.env;

mongoose.set('debug', true);

mongoose.connect(
  `mongodb://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@${MONGO_DB_HOSTNAME}:${MONGO_DB_PORT}/${MONGO_DB_NAME}`,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  },
);
