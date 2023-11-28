const db = require("../models/index");

// Create Data
const createProduct = async (req, res) => {
  const { body } = req;

  if (!body.productName || !body.price || !body.description || !body.stock) {
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      data: null,
    });
  }

  try {
    await db.products.create({
      productName: body.productName,
      catergoryId: body.catergoryId,
      price: body.price,
      description: body.description,
      stock: body.stock,
      thumbnail: body.thumbnail,
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
const getAllProducts = async (req, res) => {
  try {
    const allData = await db.products.findAll({
      include: [
        {
          model: db.categories,
          as: "category",
        },
      ],
    });
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
const updateproduct = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await db.products.update(
      {
        productName: body.productName,
        catergoryId: body.catergoryId,
        price: body.price,
        description: body.description,
        stock: body.stock,
        thumbnail: body.thumbnail,
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
const deleteproduct = async (req, res) => {
  const { idUser } = req.params;

  try {
    await db.products.destroy({
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
  createProduct,
  getAllProducts,
  updateproduct,
  deleteproduct,
};
