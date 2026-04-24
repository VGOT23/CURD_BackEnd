const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Paste your MongoDB Atlas/local connection string here
const MONGO_URI = "PASTE_YOUR_MONGODB_CONNECTION_STRING_HERE";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
  });

app.use("/api/students", studentRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
