class CardRouter {
  constructor(express, controller) {
    this.router = express.Router();
    this.controller = controller;
  }

  routes() {
    this.router.post("/", this.controller.addNewCard);
    return this.router;
  }
}

module.exports = CardRouter;
