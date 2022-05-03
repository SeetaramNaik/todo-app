const mongoose = require('mongoose');
const env = require('dotenv');
env.config();

// const databaseUrl = process.env.DATABASE_URL;
const databaseUrl = process.env.DATABASE_URL;

const databaseConfig = async () => {
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (err) {
    console.log(err);
    //exit process with failure
    process.exit(1);
  }
};

module.exports = databaseConfig;
