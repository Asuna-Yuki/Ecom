const express = require("express");
const router = express.Router();
// Middleware
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");
// Models
const Product = require("../../models/Product");
const Review = require("../../models/Review");

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

// @Route  POST api/product
// @desc   edit product
// @access Private/Admin
router.post("/:id", auth, admin, async (req, res) => {
  const { name, image, price, description, quantity } = req.body;
  try {
    // see if the product exists
    let product = await Product.findById(req.params.id);

    if (product) {
      product.name = name;
      product.image = image;
      product.price = price;
      product.description = description;
      product.quantity = quantity;
    } else {
      return res.status(404).json({ erors: [{ msg: "Product not found." }] });
    }

    await product.save();

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.--product update.");
  }
});

// @Route  POST api/product
// @desc   create new product
// @access Private/Admin

router.post("/", auth, admin, async (req, res) => {
  const { name, image, price, description, quantity } = req.body;
  try {
    // see if the product exists
    let product = await Product.findOne({ name: name });

    if (product) {
      return res.status(400).json({ msg: "Product already exists." });
    }

    product = new Product({
      name,
      image,
      price,
      description,
      quantity,
    });

    await product.save();

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.--product create.");
  }
});

// @Route  POST api/product
// @desc   delete product
// @access Private/Admin
router.post("/delete/:id", auth, admin, async (req, res) => {
  try {
    // see if the product exists
    let product = await Product.findById(req.params.id);

    if (product) {
      await product.remove();
      res.json({ msg: "Product removed." });
    } else {
      return res.status(404).json({ erors: [{ msg: "Product not found." }] });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.--product delete.");
  }
});

module.exports = router;
