const mongoose = require("mongoose");

async function connectToDB(url) {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = { connectToDB };
