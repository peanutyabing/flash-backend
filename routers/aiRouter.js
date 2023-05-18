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
    this.router.get("/check-limit", this.controller.checkUsageLimit);
    return this.router;
  }
}

module.exports = AiRouter;
