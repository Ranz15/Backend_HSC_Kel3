require("dotenv").config();
const jwt = require("jsonwebtoken");

const cekUser = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    console.log(token.slice(7));
    const userObject = jwt.verify(token.slice(7), process.env.JWT_SECRET);
    console.log(userObject);
    next();
  } catch (err) {
    return res.status(403).json({
      message: "Forbidden! Hanya orang yang beriman dapat membuka halaman ini!",
    });
  }
};

module.exports = cekUser;
