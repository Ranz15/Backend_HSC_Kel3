require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

const db = require("../models");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await db.admin.findOne({
      where: {
        email,
        password,
      },
    });

    if (!user) {
      return res.status(200).json({
        message: "Emai atau password salah!",
      });
    }

    const result = jwt.sign(
      {
        email: user.email,
        uid: user.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({
      message: "Login Berhasil",
      token: result,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

module.exports = router;
