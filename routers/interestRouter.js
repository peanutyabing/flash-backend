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
    this.router.put(
      "/:interestId",
      this.authenticateToken,
      this.controller.updateInterest
    );
    this.router.delete(
      "/:interestId",
      this.authenticateToken,
      this.controller.deleteInterest
    );
    return this.router;
  }
}

module.exports = InterestRouter;
