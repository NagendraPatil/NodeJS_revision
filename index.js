const express = require("express");
const userRouter = require("./routes/user");
const { connectToDB } = require("./connection");
const { localConstants } = require("./config");
const { logReqRes } = require("./middlewares");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

//Connection to mongodb
connectToDB(localConstants.dbUrl);

app.use(logReqRes("logs.txt"));

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${3000}!`);
});
