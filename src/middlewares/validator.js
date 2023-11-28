const validator = require("validator");
const crypt = require("bcrypt");
const db = require("../models/index");

const validatorCreateUser = async (req, res, next) => {
  try {
    const { body } = req;

    if (!body.fullName || !body.username || !body.email || !body.password) {
      return res.status(400).json({
        message: "Anda mengirimkan data yang salah",
        data: null,
      });
    }

    const strongPassword = validator.isStrongPassword(body.password);
    if (!strongPassword) {
      return res.status(400).send({
        message: "password not strong",
      });
    }

    const isValidEmail = validator.isEmail(body.email, {
      host_blacklist: ["yopmail.com", "yohomail.com"],
    });

    if (!isValidEmail) {
      return res.status(400).send({
        message: "your email is invalid",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      message: "Server Error at validator",
      serverMessage: error,
    });
  }
};

const validateLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Username and Password Required",
      });
    }

    const user = await db.customers.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not Found",
      });
    }

    const isValidPassword = crypt.compareSync(
      password,
      user.dataValues.password
    );

    if (!isValidPassword) {
      return res.status(404).json({
        message: "Invalid Password",
      });
    }

    req.userData = user.dataValues;

    next();
  } catch (error) {
    res.status(500).json({
      message: "Server Error at validator",
      serverMessage: error,
    });
  }
};

module.exports = { validatorCreateUser, validateLogin };
