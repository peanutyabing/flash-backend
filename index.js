require("dotenv").config();
const express = require("express");
const authenticateToken = require("./utils/authenticateToken.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const origin =
  process.env.NODE_ENV === "production"
    ? "https://help-me-memorise.netlify.app"
    : "http://localhost:3000";

const corsOptions = {
  origin,
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
const XpRouter = require("./routers/xpRouter.js");
const FeedRouter = require("./routers/feedRouter.js");
const InterestRouter = require("./routers/interestRouter.js");
const FluencyLevelRouter = require("./routers/fluencyLevelRouter.js");
const ForkRouter = require("./routers/forkRouter.js");
const AiRouter = require("./routers/aiRouter.js");

// importing Controllers
const UserController = require("./controllers/userController.js");
const AuthController = require("./controllers/authController.js");
const DeckController = require("./controllers/deckController.js");
const LanguageController = require("./controllers/languageController.js");
const DifficultyLevelController = require("./controllers/difficultyLevelController.js");
const CardController = require("./controllers/cardController.js");
const XpController = require("./controllers/xpControllers.js");
const FeedController = require("./controllers/feedController.js");
const InterestController = require("./controllers/interestController.js");
const FluencyLevelController = require("./controllers/fluencyLevelController.js");
const ForkController = require("./controllers/forkController.js");
const AiController = require("./controllers/aiController.js");

// importing DB
const db = require("./db/models/index.js");
const {
  sequelize,
  user,
  deck,
  language,
  fluencyLevel,
  interest,
  difficultyLevel,
  subcategory,
  card,
  xpTransaction,
  xpActivity,
  fork,
} = db;

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
const xpController = new XpController(
  sequelize,
  xpTransaction,
  xpActivity,
  user
);
const feedController = new FeedController(
  deck,
  user,
  language,
  difficultyLevel,
  subcategory,
  card,
  interest
);
const interestController = new InterestController(
  interest,
  fluencyLevel,
  language
);
const fluencyLevelController = new FluencyLevelController(fluencyLevel);
const forkController = new ForkController(sequelize, fork, user, deck);
const aiController = new AiController(sequelize, deck, card);

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
const deckRouter = new DeckRouter(
  express,
  deckController,
  authenticateToken
).routes();
const languageRouter = new LanguageRouter(express, languageController).routes();
const difficultyLevelRouter = new DifficultyLevelRouter(
  express,
  difficultyLevelController
).routes();
const cardRouter = new CardRouter(
  express,
  cardController,
  authenticateToken
).routes();
const xpRouter = new XpRouter(
  express,
  xpController,
  authenticateToken
).routes();
const feedRouter = new FeedRouter(
  express,
  feedController,
  authenticateToken
).routes();
const interestRouter = new InterestRouter(
  express,
  interestController,
  authenticateToken
).routes();
const fluencyLevelRouter = new FluencyLevelRouter(
  express,
  fluencyLevelController
).routes();
const forkRouter = new ForkRouter(
  express,
  forkController,
  authenticateToken
).routes();
const aiRouter = new AiRouter(express, aiController).routes();

// using routers
app.use("/profile", userRouter);
app.use("/auth", authRouter);
app.use("/decks", deckRouter);
app.use("/languages", languageRouter);
app.use("/difficulty-levels", difficultyLevelRouter);
app.use("/cards", cardRouter);
app.use("/xp", xpRouter);
app.use("/feed", feedRouter);
app.use("/interests", interestRouter);
app.use("/fluency-levels", fluencyLevelRouter);
app.use("/forks", forkRouter);
app.use("/ai", authenticateToken, aiRouter);

const PORT = process.env.PORT || 8080;
const http = require("http").Server(app);
http.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
