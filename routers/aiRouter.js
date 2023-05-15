class AiRouter {
  constructor(express, controller) {
    this.router = express.Router();
    this.controller = controller;
  }

  routes() {
    this.router.post(
      "/create-deck",
      this.controller.createDeckFromUserSpecification
    );
    // this.router.post("/completion", this.controller.requestAiCompletion);
    // this.router.post(
    //   "/create-cards/:deckId",
    //   this.controller.createCardsFromAiResponse
    // );
    return this.router;
  }
}

module.exports = AiRouter;
