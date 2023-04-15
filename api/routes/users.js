const router = require("express").Router();
const User = require("../models/User");
const verify = require("../verifyToken");
const bcrypt = require("bcrypt");

// UPDATE
router.put("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 12);
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      const { password, ...others } = updatedUser._doc;
      res.status(200).json(others);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You can update only your account");
  }
});

// DELETE
router.delete("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You can delete only your account");
  }
});

// GET
router.get("/find/:id", verify, async (req, res) => {
  try {
    const singleUser = await User.findById(req.params.id);
    const { password, ...info } = singleUser._doc;
    res.status(200).json(info);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL
router.get("/", verify, async (req, res) => {
  // if admin enter new user, so, to get the query er do this
  const query = req.query.new;

  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed to see all the user");
  }
});

// GET USER STATS
router.get("/stats", async (req, res) => {
  const today = new Date();
  const lastYear = today.setFullYear(today.setFullYear() - 1);

  try {
    // in aggregation pipeline, we have 2 stage
    const data = await User.aggregate([
      // 1.first stage
      {
        $project: {
          month: { $month: "$createdAt" },
          //   this "$createdAt" will have all user createtime including month
          // and the "$month" method will get the value of month(for "july->7")from "$createdAt"
        },
      },
      //   2. Second stage
      // 1st stage data will pass to next(2nd) stage
      {
        $group: {
          _id: "$month", //here the month is the above stage value
          total: { $sum: 1 }, //and it store how much users created time will the same month
        },
        // here, above we simply "group" to thing and make a object
        // 1. first is "id" and we assign value from the above
      },
    ]);
    // let, an example. 10 users are register on july(7) and 5 users are regitered on august(8)
    // At first it will fetch the date from now to last 1 year
    // then, in Aggregation 1st stage it will get the month index like (7 and 8)
    // then, in 2nd stage it will make a object by using group method
    // where, id contains the index of that month
    // and total contains the total registerd user [{id: 7, total:10}, {id:8, total:5}]

    // now return the calculate data, which get form the last stage
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
