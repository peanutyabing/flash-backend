const cors = require("cors");
const express = require("express");

require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// importing Routers

// importing Controllers

// importing DB
// const db = require("./db/models/index.js");
// const {
//   user, interest, language, difficulty, deck, card
// } = db;
// initializing Controllers -> note the lowercase for the first word

// inittializing Routers

// using routers

const http = require("http").Server(app);
http.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
