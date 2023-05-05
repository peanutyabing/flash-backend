require("dotenv").config();
const express = require("express");
const authenticateToken = require("./utils/authenticateToken.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// importing Routers
const UserRouter = require("./routers/userRouter.js");
const AuthRouter = require("./routers/authRouter.js");

// importing Controllers
const UserController = require("./controllers/userController.js");
const AuthController = require("./controllers/authController.js");

// importing DB
const db = require("./db/models/index.js");
const { user } = db;

// initializing Controllers
const userController = new UserController(user);
const authController = new AuthController(user);

// initializing Routers
const userRouter = new UserRouter(
  express,
  userController,
  authenticateToken
).routes();
const authRouter = new AuthRouter(
  express,
  authController,
  authenticateToken
).routes();

// using routers
app.use("/profile", userRouter);
app.use("/auth", authRouter);

const PORT = process.env.PORT;
const http = require("http").Server(app);
http.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
