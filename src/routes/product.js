// Pemanggilan Library Express
const express = require("express");
const { route } = require("express/lib/application");

// Menggunakan function express untuk route
const router = express.Router();

// Pemanggilan Controller User (untuk logic CRUD)
const productControllers = require("../controllers/products");

// Route Section

// Create - POST
router.post("/", productControllers.createProduct);

// Read - GET
router.get("/", productControllers.getAllProducts);

// Update - PATCH
router.patch("/:idUser", productControllers.updateproduct);

// Delete - DELETE
router.delete("/:idUser", productControllers.deleteproduct);

module.exports = router;
