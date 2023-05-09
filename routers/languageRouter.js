class LanguageRouter {
  constructor(express, controller) {
    this.router = express.Router();
    this.controller = controller;
  }

  routes() {
    this.router.get("/", this.controller.getAllLanguages);
    return this.router;
  }
}

module.exports = LanguageRouter;
