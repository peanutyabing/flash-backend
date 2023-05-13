class CardRouter {
  constructor(express, controller, authenticateToken) {
    this.router = express.Router();
    this.controller = controller;
    this.authenticateToken = authenticateToken;
  }

  routes() {
    this.router.get("/:deckId", this.controller.getCardsOfDeck);
    this.router.get(
      "/:deckId/:cardId",
      this.authenticateToken,
      this.controller.getOneCard
    );
    this.router.post("/", this.authenticateToken, this.controller.addNewCard);
    this.router.put(
      "/:cardId",
      this.authenticateToken,
      this.controller.updateCard
    );
    this.router.delete(
      "/:cardId",
      this.authenticateToken,
      this.controller.deleteCard
    );
    return this.router;
  }
}

module.exports = CardRouter;
