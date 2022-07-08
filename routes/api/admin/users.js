const express = require("express");
const router = express.Router();
const admin = require("../../../middleware/admin");
const auth = require("../../../middleware/auth");

const User = require("../../../models/User");

// @route  GET api/profile
// @desc   Test route
// @access Private
router.get("/", auth, admin, async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      return res.status(404).send("Users not found.");
    }

    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.--users");
  }
});

module.exports = router;
