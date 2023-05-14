class ForkRouter {
  constructor(express, controller, authenticateToken) {
    this.router = express.Router();
    this.controller = controller;
    this.authenticateToken = authenticateToken;
  }

  routes() {
    this.router.get("/from-user/:userId", this.controller.getForksFromUser);
    this.router.get("/to-user/:userId", this.controller.getForksToUser);
    this.router.get("/from-deck/:deckId", this.controller.getForksFromDeck);
    this.router.post("/", this.authenticateToken, this.controller.addFork);
    this.router.put("/:deckId", this.controller.updateNForks);
    return this.router;
  }
}

module.exports = ForkRouter;
