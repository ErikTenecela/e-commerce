const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const User = require("../models/users");

//post send full registering
//db monogDb
//api/auth/rigsiter
router.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, userData) => {
    if (err)
      return res.status(400).json({ msg: "Please fill in the requirements" });
    return res.status(200).json({ msg: "fully registered" });
  });
});

module.exports = router;
