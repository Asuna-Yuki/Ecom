const express = require("express");
const router = express.Router();

const Order = require("../../models/Order");

// @route  GET api/order
// @desc   get order by id
// @access Public
router.get("/:id", async (req, res) => {
  try {
    const orderDetail = await Order.findById(req.params.id);

    if (!orderDetail) {
      return res.status(404).send("Order not found.");
    }
    res.json(orderDetail);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.--one order");
  }
});

// @route  GET api/order
// @desc   get all order by user id
// @access Public
router.get("/myorder/:id", async (req, res) => {
  try {
    const orderDetail = await Order.find({ user: req.params.id });

    if (!orderDetail) {
      return res.status(404).send("Order not found by user id.");
    }
    res.json(orderDetail);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.--user order");
  }
});

module.exports = router;
