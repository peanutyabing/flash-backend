class FeedRouter {
  constructor(express, controller, authenticateToken) {
    this.router = express.Router();
    this.controller = controller;
    this.authenticateToken = authenticateToken;
  }

  routes() {
    this.router.get("/all", this.controller.getAllDecks);
    this.router.get(
      "/of-interest",
      this.authenticateToken,
      this.controller.getDecksOfInterest
    );
    this.router.get(
      "/outside-of-interests",
      this.authenticateToken,
      this.controller.getDecksOutsideOfInterests
    );
    return this.router;
  }
}

module.exports = FeedRouter;
