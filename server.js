const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

// Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/review", require("./routes/api/review"));
app.use("/api/product", require("./routes/api/product"));
app.use("/api/checkout", require("./routes/api/checkout"));
app.use("/api/order", require("./routes/api/order"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
