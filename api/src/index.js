const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv/config");
const generateName = require("./utils");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename: (req, file, cb) => {
    cb(null, generateName() + "." + file.originalname.split(".")[1]);
  },
});

// Initialize
const app = express();

// Middlewares
app.use(
  multer({
    storage,
    dest: path.join(__dirname, "public/uploads"),
  }).single("file")
);
app.use(cors());
app.use(bodyParser.json());

// Settings
app.set("port", 3200);

// Import routes
const imageRoute = require("./routes/images");
app.use("/images", imageRoute);

// Routes
app.get("/", (req, res) => {
  res.send("We are home");
});

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Connect to DB
// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
//   console.log("Connected to DB!")
// );

// Start the server
app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
