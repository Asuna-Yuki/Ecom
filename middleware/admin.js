const User = require("../models/User");

module.exports = async function (req, res, next) {
  // console.log(req.user.id);
  const user = await User.findById(req.user.id);
  if (user && user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};
