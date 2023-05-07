class DeckRouter {
  constructor(express, controller) {
    this.router = express.Router();
    this.controller = controller;
  }

  routes() {
    this.router.get("/", this.controller.getUserDecks);
    return this.router;
  }
}

module.exports = DeckRouter;
