const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  res.send("<h1>Register page at register route</h1>");
});

router.get("/login", (req, res) => {
  res.send("<h1>Login page at login route</h1>");
});

module.exports = router;
