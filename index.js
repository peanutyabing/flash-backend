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
const DeckRouter = require("./routers/deckRouter.js");
const LanguageRouter = require("./routers/languageRouter.js");
const DifficultyLevelRouter = require("./routers/difficultyLevelRouter.js");
const CardRouter = require("./routers/cardRouter.js");

// importing Controllers
const UserController = require("./controllers/userController.js");
const AuthController = require("./controllers/authController.js");
const DeckController = require("./controllers/deckController.js");
const LanguageController = require("./controllers/languageController.js");
const DifficultyLevelController = require("./controllers/difficultyLevelController.js");
const CardController = require("./controllers/cardController.js");

// importing DB
const db = require("./db/models/index.js");
const { user, deck, language, difficultyLevel, subcategory, card } = db;

// initializing Controllers
const userController = new UserController(user);
const authController = new AuthController(user);
const deckController = new DeckController(
  deck,
  user,
  language,
  difficultyLevel,
  subcategory,
  card
);
const languageController = new LanguageController(language);
const difficultyLevelController = new DifficultyLevelController(
  difficultyLevel
);
const cardController = new CardController(card);

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
const deckRouter = new DeckRouter(express, deckController).routes();
const languageRouter = new LanguageRouter(express, languageController).routes();
const difficultyLevelRouter = new DifficultyLevelRouter(
  express,
  difficultyLevelController
).routes();
const cardRouter = new CardRouter(express, cardController).routes();

// using routers
app.use("/profile", userRouter);
app.use("/auth", authRouter);
app.use("/decks", authenticateToken, deckRouter);
app.use("/languages", languageRouter);
app.use("/difficulty-levels", difficultyLevelRouter);
app.use("/cards", authenticateToken, cardRouter);

const PORT = process.env.PORT;
const http = require("http").Server(app);
http.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
