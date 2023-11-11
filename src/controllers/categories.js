const db = require("../models/index");

// Create Data
const createCategory = async (req, res) => {
  const { body } = req;

  if (!body.categoryName || !body.categoryType) {
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      data: null,
    });
  }

  try {
    await db.categories.create({
      categoryName: body.categoryName,
      categoryType: body.categoryType,
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
const getAllCategory = async (req, res) => {
  try {
    const allData = await db.categories.findAll();
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
const updateCategory = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;

  try {
    await db.categories.update(
      {
        categoryName: body.categoryName,
        categoryType: body.categoryType,
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
const deleteCategory = async (req, res) => {
  const { idUser } = req.params;

  try {
    await db.categories.destroy({
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

// Module export Section
module.exports = {
  createCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
};
