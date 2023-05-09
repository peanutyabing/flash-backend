class CardRouter {
  constructor(express, controller) {
    this.router = express.Router();
    this.controller = controller;
  }

  routes() {
    this.router.get("/:deckId", this.controller.getCardsOfDeck);
    this.router.post("/", this.controller.addNewCard);
    this.router.put("/:cardId", this.controller.updateCard);
    this.router.delete("/:cardId", this.controller.deleteCard);
    return this.router;
  }
}

module.exports = CardRouter;
