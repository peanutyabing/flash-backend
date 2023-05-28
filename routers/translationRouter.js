class TranslationRouter {
  constructor(express, controller) {
    this.router = express.Router();
    this.controller = controller;
  }

  routes() {
    this.router.get("/to-en", this.controller.translateToEnglish);
    return this.router;
  }
}

module.exports = TranslationRouter;
