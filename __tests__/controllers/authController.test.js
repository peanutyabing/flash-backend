const AuthController = require("../../controllers/authController.js");
const { user } = require("../../db/models/index.js");
const authController = new AuthController(user);

// jest.mock("../../db/models/index.js");

const req = {
  body: {
    username: "",
    email: "",
    hashedPassword: "",
  },
};

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

it("should send a status code of 400 when the username, email, or password is missing from the request body", async () => {
  // user.init.mockImplementationOnce(() => ({
  //   id: 1,
  //   username: "test_username",
  //   email: "test_email@test.com",
  //   password: "test_password_#&%^#%$*!@^#(!@&#^!@&#^",
  // }));
  await authController.signUp(req, res);
  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.status).toHaveBeenCalledTimes(1);
  expect(res.json).toHaveBeenCalledTimes(1);
});
