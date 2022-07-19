const express = require("express");
const router = express.Router();
const admin = require("../../../middleware/admin");
const auth = require("../../../middleware/auth");

const Order = require("../../../models/Order");
const User = require("../../../models/User");

// @route  GET api/admin/orders
// @desc   get all orders
// @access Private/Admin
router.get("/", auth, admin, async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user", "_id name");

    if (!orders) {
      return res.status(404).send("Orders not found.");
    }

    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.--orders");
  }
});

// @route  GET api/admin/orders
// @desc   get order by id
// @access Private/Admin
router.get("/:id", auth, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "_id name email"
    );

    if (!order) {
      return res.status(404).send("Order not found.");
    }

    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.--order");
  }
});

// @route  POST api/admin/orders
// @desc   edit order
// @access Private/Admin

router.post("/:id", auth, admin, async (req, res) => {
  try {
    let order = await Order.findById(req.params.id);

    // edit delivery
    if (!order) {
      res.status(404).send("order not found.");
    }

    order.isDelivered = true;

    await order.save();

    // res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.--order update.");
  }
});

module.exports = router;
