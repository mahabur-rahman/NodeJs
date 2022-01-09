const express = require("express");
const router = express.Router();
// controller
const { getUser, saveUser } = require("../controllers/users.controller");

router.get("/users", getUser);

router.post("/users", saveUser);

module.exports = router;
