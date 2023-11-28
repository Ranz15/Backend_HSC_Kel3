const jwt = require("jsonwebtoken");

const verifyJWT = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];

    if (!token) {
      res.status(400).send({
        message: "no token provided / token empty",
      });
    }

    const verify = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);

    if (!verify) {
      res.status(401).send({
        message: "failed to verify token",
      });
    }

    req.userID = verify;

    next();
  } catch (error) {
    res.status(500).json({
      message: "Server Error at Verify Token",
      serverMessage: error,
    });
  }
};

module.exports = { verifyJWT };
