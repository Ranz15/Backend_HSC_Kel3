const adminModel = require("../models/index");

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
    await adminModel.create({
      id: body.id,
      fullName: body.fullname,
      username: body.username,
      email: body.email,
      password: body.password,
      gender: body.gender,
      phoneNumber: body.phoneNumber,
      createAt: Date(),
      updatedAt: Date(),
    });
    console.log(body);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

// Read Data

// Update Data

// Delete Data

module.exports = {
  createAdmin,
};
