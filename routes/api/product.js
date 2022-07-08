const express = require("express");
const router = express.Router();
// Models
const Product = require("../../models/Product");
const Rreview = require("../../models/Review");

// @Route  GET api/product
// @desc   getting all products
// @access Public

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    if (!products) {
      return res.status(404).send("Product not found.");
    }

    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.--product");
  }
});

// @Route  GET api/product
// @desc   getting one products
// @access Public

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); //req.params.id

    if (!product) {
      return res.status(404).send("Product not found.");
    }

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.--one product");
  }
});

module.exports = router;
