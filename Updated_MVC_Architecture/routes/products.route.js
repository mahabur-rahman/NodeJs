const express = require("express");
const router = express.Router();
// controller
const {
  getProduct,
  saveProduct,
} = require("../controllers/products.controller");

router.get("/products", getProduct);

router.post("/products", saveProduct);

module.exports = router;
