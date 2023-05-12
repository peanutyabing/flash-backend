class XpRouter {
  constructor(express, controller, authenticateToken) {
    this.router = express.Router();
    this.controller = controller;
    this.authenticateToken = authenticateToken;
  }

  routes() {
    this.router.get(
      "/all-time",
      this.controller.getAllUsersAllTimeXpTransactionHistory
    );
    this.router.get(
      "/this-week",
      this.controller.getAllUsersThisWeekXpTransactionHistory
    );
    this.router.get(
      "/",
      this.authenticateToken,
      this.controller.getUserXpTransactionHistory
    );
    this.router.post(
      "/",
      this.authenticateToken,
      this.controller.addXpTransaction
    );
    return this.router;
  }
}

module.exports = XpRouter;
