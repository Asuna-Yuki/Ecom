const express = require("express");
const router = express.Router();
const Product = require("../../../models/Product");
const admin = require("../../../middleware/admin");
const auth = require("../../../middleware/auth");

// @Route  POST api/product
// @desc   creating new product
// @access Private/Admin

router.post("/", auth, admin, async (req, res) => {
  const { name, image, price, description } = req.body;
  try {
    const newProduct = new Product({
      name: name,
      image: image,
      price: price,
      description: description,
      review: [],
    });

    const product = await newProduct.save();

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.--product create.");
  }
});

// @Route  GET api/product
// @desc   getting all products
// @access Private/Admin

router.get("/", auth, admin, async (req, res) => {
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
// @desc   get product by id
// @access Private/Admin

router.get("/:id", auth, admin, async (req, res) => {
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
