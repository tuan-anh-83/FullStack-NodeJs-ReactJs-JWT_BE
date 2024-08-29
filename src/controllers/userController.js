const { createUserService, loginService } = require("../services/userService");

const createUser = async (req, res) => {
  console.log(">>> check req.body: ", req.body);
  const { name, email, password } = req.body;

  const data = await createUserService(name, email, password);
  return res.status(200).json(data);
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const data = await loginService(email, password);
  return res.status(200).json(data);
};

module.exports = {
  createUser,
  handleLogin,
};
