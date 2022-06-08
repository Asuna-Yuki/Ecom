const express = require("express");
const router = express.Router();

// @route  GET api/profile
// @desc   Test route
// @access Private
router.get("/", (req, res) => {
  return res.send("Profile route");
});

module.exports = router;
