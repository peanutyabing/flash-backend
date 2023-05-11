class XpRouter {
  constructor(express, controller) {
    this.router = express.Router();
    this.controller = controller;
  }

  routes() {
    this.router.get("/", this.controller.getXpTransactionHistory);
    this.router.post("/", this.controller.addXpTransaction);
    return this.router;
  }
}

module.exports = XpRouter;
