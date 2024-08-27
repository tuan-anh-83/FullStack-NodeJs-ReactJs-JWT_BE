const express = require("express");
const { createUser } = require("../controllers/userController");

const routerAPI = express.Router();

routerAPI.get("/", (req, res) => {
  return res.status(200).json("Hello World API");
});

routerAPI.post("/register", createUser);
module.exports = routerAPI; //export default
