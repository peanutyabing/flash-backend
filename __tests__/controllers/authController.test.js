const AuthController = require("../../controllers/authController.js");
const UserController = require("../../controllers/userController.js");
const db = require("../../db/models/index.js");
const { user } = db;
const userController = new UserController(user);
const authController = new AuthController(user);

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
  sendStatus: jest.fn(),
  cookie: jest.fn(),
  clearCookie: jest.fn(),
};

describe("test auth controller method that creates a new account", () => {
  beforeAll(async () => {
    await user.sync({ force: true });
  });

  it("should send a status code of 400 when the username, email, or password is missing from the request body", async () => {
    const req = {
      body: {
        username: "",
        email: "",
        password: "",
      },
    };

    await authController.signUp(req, res);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  it("should create a user if the username, email, and password are provided in the request body", async () => {
    const req = {
      body: {
        username: "ellen1",
        email: "ellen1@ellen.com",
        password: "the_correct_password",
        imageUrl: "https://my-pic.test.com",
        firstName: "Test First Name",
        lastName: "Test Last Name",
        xp: 0,
      },
    };

    await authController.signUp(req, res);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ success: true })
    );
  });
});

describe("test auth controller method that signs a user in", () => {
  it("should send a status code of 403 and an 'incorrect email' message when someone tries to log in with the wrong email ", async () => {
    const req = {
      body: {
        email: "not-ellen1@not-ellen.com",
        password: "the_correct_password",
      },
    };
    await authController.signIn(req, res);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      msg: "incorrect user email",
    });
  });

  it("should send a status code of 403 and an 'incorrect password' message when someone tries to log in with the right email but the wrong password", async () => {
    const req = {
      body: {
        email: "ellen1@ellen.com",
        password: "a_different_password",
      },
    };
    await authController.signIn(req, res);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      msg: "incorrect password",
    });
  });

  it("should send a cookie and a login success message when someone tries to log in with the correct email and password", async () => {
    const req = {
      body: {
        email: "ellen1@ellen.com",
        password: "the_correct_password",
      },
    };
    await authController.signIn(req, res);
    expect(res.cookie).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ success: true, msg: "user authenticated" })
    );
  });
});

describe("test auth controller method that refreshes the access token", () => {
  it("should send a status with code 401 if the request to refreh token does not contain a cookie with a jwt", async () => {
    const req = {};
    await authController.refreshToken(req, res);
    expect(res.sendStatus).toHaveBeenCalledTimes(1);
    expect(res.sendStatus).toHaveBeenCalledWith(401);
  });

  it("should send a status with code 401 if the request to refreh token does not contain a cookie with a jwt", async () => {
    const req = {};
    await authController.refreshToken(req, res);
    expect(res.sendStatus).toHaveBeenCalledTimes(1);
    expect(res.sendStatus).toHaveBeenCalledWith(401);
  });

  it("should send a status with code 403 if the request to refreh token contains the wrong refresh token", async () => {
    const req = {
      cookies: { jwt: "not_the_actual_refresh_token" },
    };
    await authController.refreshToken(req, res);
    expect(res.sendStatus).toHaveBeenCalledTimes(1);
    expect(res.sendStatus).toHaveBeenCalledWith(403);
  });

  it("should send a sucess message if the request to refreh token contains the correct refreshToken", async () => {
    const foundUser = await user.findOne({
      where: { email: "ellen1@ellen.com" },
    });
    const refreshToken = foundUser.refreshToken;
    const req = {
      cookies: { jwt: refreshToken },
    };
    await authController.refreshToken(req, res);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ success: true, msg: "token refreshed" })
    );
  });
});

describe("test auth controller method that signs the user out", () => {
  it("should send a status with code 204 if the request does not contain a cookie with a jwt", async () => {
    const req = {};
    await authController.signOut(req, res);
    expect(res.sendStatus).toHaveBeenCalledTimes(1);
    expect(res.sendStatus).toHaveBeenCalledWith(204);
  });

  it("should delete the user's refresh token in the database and send a status with code 204 if the request contains a valid refresh token", async () => {
    const foundUser = await user.findOne({
      where: { email: "ellen1@ellen.com" },
    });
    const refreshToken = foundUser.refreshToken;
    const req = {
      cookies: { jwt: refreshToken },
    };
    await authController.signOut(req, res);
    const updatedUser = await user.findOne({
      where: { email: "ellen1@ellen.com" },
    });
    const emptyToken = updatedUser.refreshToken;
    expect(res.sendStatus).toHaveBeenCalledTimes(1);
    expect(res.sendStatus).toHaveBeenCalledWith(204);
    expect(emptyToken).toHaveLength(0);
  });

  afterAll(async () => {
    const req = {
      params: {
        username: "ellen1",
      },
    };
    await userController.deleteTestUser(req, res);
  });
});

describe("test helper function that generates encrypted token", () => {
  it("should generate an access token from a payload containing the user's username and id", () => {
    const payload = { username: "ellen1", id: 1 };
    const encryptedToken = authController.generateToken(payload, false);
    expect(encryptedToken).toBeDefined();
    expect(encryptedToken).toMatch(/^eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9./);
  });
});
