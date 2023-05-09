class DifficultyLevelRouter {
  constructor(express, controller) {
    this.router = express.Router();
    this.controller = controller;
  }

  routes() {
    this.router.get("/", this.controller.getAllDifficultyLevels);
    return this.router;
  }
}

module.exports = DifficultyLevelRouter;
