const express = require("express");
const router = express.Router();
// Models
const Product = require("../../models/Product");

// @Route  GET api/product
// @desc   getting all products
// @access Public

router.get("/", async (req, res) => {
  try {
    const product = await Product.find();

    if (!product) {
      return res.status(404).send("Product not found.");
    }

    res.json(product);
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

// @Route  POST api/product
// @desc   creating new product
// @access Private

router.post("/", async (req, res) => {
  const { name, image, price, description } = req.body;
  try {
    const newProduct = new Product({
      name: name,
      image: image,
      price: price,
      description: description,
    });

    const product = await newProduct.save();

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.--product create.");
  }
});

module.exports = router;
