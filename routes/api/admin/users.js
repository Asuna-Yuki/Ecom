const express = require("express");
const router = express.Router();
const admin = require("../../../middleware/admin");
const auth = require("../../../middleware/auth");

const User = require("../../../models/User");

// @route  GET api/users
// @desc   get all users
// @access Private/Admin
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

// @route  GET api/users
// @desc   get user by id
// @access Private/Admin
router.get("/:id", auth, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(user);

    if (!user) {
      return res.status(404).send("User not found.");
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.--user");
  }
});

module.exports = router;
