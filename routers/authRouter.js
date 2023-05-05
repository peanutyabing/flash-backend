class AuthRouter {
  constructor(express, controller, authenticateToken) {
    this.router = express.Router();
    this.controller = controller;
    this.authenticateToken = authenticateToken;
  }
  routes() {
    this.router.post("/sign-up", this.controller.signUp);
    this.router.post("/sign-in", this.controller.signIn);
    this.router.get("/sign-out", this.controller.signOut);
    this.router.get("/refresh", this.controller.refreshToken);
    this.router.put(
      "/change-password",
      this.authenticateToken,
      this.controller.changePassword
    );
    return this.router;
  }
}

module.exports = AuthRouter;
