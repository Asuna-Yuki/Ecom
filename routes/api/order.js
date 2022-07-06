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

module.exports = router;
