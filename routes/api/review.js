const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
// middleware
const auth = require("../../middleware/auth");
// models
const User = require("../../models/User");
const Review = require("../../models/Review");

// @route  POST api/review
// @desc   Create a review
// @access Private

router.post(
  "/",
  [auth, check("comment", "comment is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newReview = new Review({
        user: req.user.id,
        name: user.name,
        comment: req.body.comment,
        rating: req.body.rating,
      });

      const review = await newReview.save();

      res.json(review);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error.--");
    }
  }
);

// @route  GEt api/review
// @desc   get all review
// @access Public

router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find();

    !reviews ? res.json({ msg: "No reviews" }) : res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error.--reviews");
  }
});

module.exports = router;
