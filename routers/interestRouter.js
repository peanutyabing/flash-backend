class InterestRouter {
  constructor(express, controller, authenticateToken) {
    this.router = express.Router();
    this.controller = controller;
    this.authenticateToken = authenticateToken;
  }

  routes() {
    this.router.get("/all", this.controller.getAllInterests);
    this.router.get("/:userId", this.controller.getUserInterests);
    this.router.post(
      "/",
      this.authenticateToken,
      this.controller.addOneInterest
    );
    return this.router;
  }
}

module.exports = InterestRouter;
