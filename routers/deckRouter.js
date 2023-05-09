class DeckRouter {
  constructor(express, controller) {
    this.router = express.Router();
    this.controller = controller;
  }

  routes() {
    this.router.get("/", this.controller.getUserDecks);
    this.router.get("/:deckId", this.controller.getOneDeck);
    this.router.post("/", this.controller.addNewDeck);
    this.router.put("/:deckId", this.controller.updateDeck);
    return this.router;
  }
}

module.exports = DeckRouter;
