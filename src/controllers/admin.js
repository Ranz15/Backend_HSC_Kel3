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
const getAllAdmin = async (req, res) => {
  try {
    const allData = await db.admin.findAll();
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
const updateAdmin = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await db.admin.update(
      {
        fullName: body.fullname,
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
const deleteAdmin = async (req, res) => {
  const { idUser } = req.params;

  try {
    await db.admin.destroy({
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

module.exports = {
  createAdmin,
  getAllAdmin,
  updateAdmin,
  deleteAdmin,
};
