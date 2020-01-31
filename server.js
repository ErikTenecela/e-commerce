// require("dotenv").config();
const express = require("express");
// const passport = require("passport");
const path = require("path");
const mongoose = require("mongoose");
const config = require("./config/key");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 5000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// app.use(passport.initialize());

app.use("/api/users", require("./routes/users"));
// app.use("/api/auth", require("./routes/auth"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Connect to the Mongo DB
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected.."))
  .catch(err => console.log(`won't connect ${err}`));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
