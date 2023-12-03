// Pemanggilan Library Express
const express = require("express");
const { route } = require("express/lib/application");

// Menggunakan function express untuk route
const router = express.Router();

// Pemanggilan Controller User (untuk logic CRUD)
const productControllers = require("../controllers/products");

// Inisialisasi Middleware
const { verifyJWT } = require("../middlewares/verifyToken");

// Route Section

// Create - POST
router.post("/", verifyJWT, productControllers.createProduct);

// Read - GET
router.get("/", productControllers.getAllProducts);

// Update - PATCH
router.patch("/:idUser", verifyJWT, productControllers.updateproduct);

// Delete - DELETE
router.delete("/:idUser", verifyJWT, productControllers.deleteproduct);

// Get All Product Where Categories
router.get("/:namaCategories", productControllers.getAllProductWhereCategories);

// Get Product Detail
router.get("/detail/:idUser", productControllers.productDetail);

module.exports = router;
