class DeckRouter {
  constructor(express, controller, authenticateToken) {
    this.router = express.Router();
    this.controller = controller;
    this.authenticateToken = authenticateToken;
  }

  routes() {
    this.router.get("/", this.authenticateToken, this.controller.getUserDecks);
    this.router.get("/:deckId", this.controller.getOneDeck);
    this.router.post("/", this.authenticateToken, this.controller.addNewDeck);
    this.router.put(
      "/:deckId",
      this.authenticateToken,
      this.controller.updateDeck
    );
    return this.router;
  }
}

module.exports = DeckRouter;
