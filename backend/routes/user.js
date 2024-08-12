const express = require("express");
const { login, signup } = require("../controller/UserController");
const router = express.Router();

//Login

router.post("/login", login);

//SignUp

router.post("/signup", signup);

module.exports = router 