const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

// Register
router.post("/register", async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 12);
  try {
    // const newUser = new User({
    //   username: req.body.username,
    //   email: req.body.email,
    //   password: hashPassword,
    // });
    const newUser = new User(req.body);
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong Username & Password");

    const checkUser = await bcrypt.compare(req.body.password, user.password);
    !checkUser && res.status(401).json("Wrong Username & Password");

    // we are validate user using jwt at login time
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "7d" }
    );

    // hide password and send rest of data
    const { password, ...info } = user._doc;
    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
