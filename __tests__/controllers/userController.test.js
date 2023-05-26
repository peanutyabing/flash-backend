const UserController = require("../../controllers/userController.js");
const AuthController = require("../../controllers/authController.js");
const db = require("../../db/models/index.js");
const { user } = db;
const userController = new UserController(user);
const authController = new AuthController(user);

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
  cookie: jest.fn(),
};

describe("test user controller method that gets a user's profile", () => {
  beforeAll(async () => {
    const req = {
      body: {
        username: "ellen2",
        email: "ellen2@ellen.com",
        password: "the_correct_password",
        imageUrl: "https://my-pic.test.com",
        firstName: "Test First Name",
        lastName: "Test Last Name",
        xp: 0,
      },
    };
    await authController.signUp(req, res);
  });

  it("should send a status code of 400 when the useid is not part of the request params", async () => {
    const req = {
      params: {},
    };

    await userController.getOtherUserProfile(req, res);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  it("should send an empty response if the userid is not in the database", async () => {
    const req = {
      params: { userId: 9 },
    };

    await userController.getOtherUserProfile(req, res);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(null);
  });

  it("should send a status code of 200 and a json object with the user's info if a valid userid is in the request params", async () => {
    const req = {
      params: { userId: 1 },
    };

    await userController.getOtherUserProfile(req, res);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        username: expect.any(String),
        email: expect.any(String),
      })
    );
  });
});

describe("test user controller method that checks if a user exists", () => {
  beforeAll(async () => {
    const req = {
      body: {
        username: "ellen3",
        email: "ellen3@ellen.com",
        password: "the_correct_password",
        imageUrl: "https://my-pic.test.com",
        firstName: "Test First Name",
        lastName: "Test Last Name",
        xp: 0,
      },
    };
    await authController.signUp(req, res);
  });

  it("should send a status code of 400 and an error message if the req body does not contain a valid user attribute", async () => {
    const req = {
      body: {},
    };

    await userController.checkIfUserExists(req, res);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        error: true,
        msg: expect.any(Error),
      })
    );
  });

  it("should send a userFound:false response if the attribute in the req body do not match any user in the database", async () => {
    const req = {
      body: { username: "non-existent user" },
    };

    await userController.checkIfUserExists(req, res);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ userFound: false });
  });

  it("should send a userFound:true response if the attribute in the req body matches a user in the database", async () => {
    const req = {
      body: { username: "ellen3" },
    };

    await userController.checkIfUserExists(req, res);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ userFound: true });
  });
});

afterAll(async () => {
  const req = {
    params: {
      username: "ellen2",
    },
  };
  await userController.deleteTestUser(req, res);
});
