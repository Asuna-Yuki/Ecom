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
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).send("User not found.");
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.--user");
  }
});

// @route  POST api/users
// @desc   edit user
// @access Private/Admin

router.post("/:id", auth, admin, async (req, res) => {
  const { name, email, isAdmin } = req.body;

  try {
    let user = await User.findById(req.params.id);

    if (user) {
      user.name = name;
      user.email = email;
      user.isAdmin = isAdmin;
    } else {
      return res.status(404).json({ erors: [{ msg: "User not found." }] });
    }

    let checkEmail = await User.findOne({ email: user.email });

    // if (checkEmail._id !== user._id) {
    //   return res
    //     .status(400)
    //     .json({ erors: [{ msg: "Email already exists." }] });
    // }

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.--user update.");
  }
});

module.exports = router;
