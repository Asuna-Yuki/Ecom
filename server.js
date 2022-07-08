const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Connect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/review", require("./routes/api/review"));
app.use("/api/product", require("./routes/api/product"));
app.use("/api/checkout", require("./routes/api/checkout"));
app.use("/api/order", require("./routes/api/order"));

// admin routes
app.use("/api/admin/users", require("./routes/api/admin/users"));
app.use("/api/admin/orders", require("./routes/api/admin/orders"));
app.use("/api/admin/products", require("./routes/api/admin/products"));

// serve static assets to production
if (process.env.NODE_ENV == "production") {
  // set static folder
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
