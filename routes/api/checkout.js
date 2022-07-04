const express = require("express");
const router = express.Router();

const Order = require("../../models/Order");
const Product = require("../../models/Product");

// @route  GET api/checkout
// @desc   check order and create order
// @access Public
router.post("/", async (req, res) => {
  const { cartItems, shippingAddress, paymentMethod, user } = req.body;

  try {
    let quantityError = false;

    for (let i = 0; i < cartItems.length; i++) {
      let product = await Product.findById(cartItems[i]._id);

      if (product.quantity < cartItems[i].quantity) {
        quantityError = true;
        break;
      }
    }

    if (quantityError) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Not enough product in Stock." }] });
    }

    let order = new Order({
      user: user._id,
      shippingAddress: shippingAddress,
      paymentMethod: paymentMethod,
      orderItems: cartItems,
    });

    await order.save();

    res.json({ order: order });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.");
  }
});

module.exports = router;
