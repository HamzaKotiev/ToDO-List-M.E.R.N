const { Router } = require("express");
const router = Router();

const User = require("../models/user");

router.post("/registration", async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUser = await User.findOne({ email });

    if (isUser) {
      return res.status(300).json({ message: "User already exists" });
    }

    const user = new User({ email, password });

    await user.save();

    res.status(201).json({ message: "User created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
