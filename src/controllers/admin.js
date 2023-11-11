const db = require("../models/index");

// Create Data
const createAdmin = async (req, res) => {
  const { body } = req;

  if (!body.username || !body.email || !body.password) {
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      data: null,
    });
  }

  try {
    await db.admin.create({
      fullName: body.fullname,
      username: body.username,
      email: body.email,
      password: body.password,
      gender: body.gender,
      phoneNumber: body.phoneNumber,
      createAt: Date(),
      updatedAt: Date(),
    });
    return res.status(201).json({
      message: "Data Created",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

// Read Data
const getAdmin = async (req, res) => {
  try {
    const result = await db.admin.findAll();
    return res.status(200).json({
      message: "Berhasil mengambil data admin",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Terjadi kesalahan dari server!",
    });
  }
};

// Update Data

// Delete Data

module.exports = {
  createAdmin,
  getAdmin,
};
