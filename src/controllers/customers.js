const db = require("../models/index");
const validator = require("validator");
const crypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Create Data
const createUser = async (req, res) => {
  const { body } = req;

  const hashedPassword = crypt.hashSync(body.password, 8);

  try {
    await db.customers.create({
      fullName: body.fullname,
      dateOfBirth: body.dateOfBirth,
      address: body.address,
      username: body.username,
      email: body.email,
      password: hashedPassword,
      gender: body.gender,
      phoneNumber: body.phoneNumber,
    });
    res.status(201).json({
      message: "Data Sukses ditambahkan",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};
// Read Data
const getAllUsers = async (req, res) => {
  try {
    const allData = await db.customers.findAll();

    res.status(200).json({
      message: "Data berhasil ditampilkan",
      data: allData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};
// Update Data
const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;

  try {
    await db.customers.update(
      {
        fullName: body.fullname,
        dateOfBirth: body.dateOfBirth,
        address: body.address,
        username: body.username,
        email: body.email,
        password: body.password,
        gender: body.gender,
        phoneNumber: body.phoneNumber,
      },
      {
        where: {
          id: idUser,
        },
      }
    );

    res.status(200).json({
      message: "Update Data Berhasil",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};
// Delete Data
const deleteUser = async (req, res) => {
  const { idUser } = req.params;

  try {
    await db.customers.destroy({
      where: {
        id: idUser,
      },
    });
    res.status(200).json({
      message: "Delete Data Berhasil",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

// Login User
const login = async (req, res) => {
  try {
    const { userData } = req;
    delete userData.password;

    const token = jwt.sign({ id: userData.id }, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });

    return res.status(200).send({
      message: "login berhasil",
      token: token,
      userData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

// Get Profile
const getProfile = async (req, res) => {
  try {
    const { userID } = req;

    const getData = await db.customers.findOne({ where: { id: userID } });

    if (!getData) {
      return res.status(404).send({ message: `data not found` });
    }

    return res.status(200).send({
      message: `get profile success`,
      data: getData.dataValues,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

// Module export Section
module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  login,
  getProfile,
};
