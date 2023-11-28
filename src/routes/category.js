// Pemanggilan Library Express
const express = require("express");
const { route } = require("express/lib/application");

// Menggunakan function express untuk route
const router = express.Router();

// Pemanggilan Controller User (untuk logic CRUD)
const categoriesControllers = require("../controllers/categories");

// Inisialisasi Middleware
const { verifyJWT } = require("../middlewares/verifyToken");

// Route Section

// Create - POST
router.post("/", verifyJWT, categoriesControllers.createCategory);

// Read - GET
router.get("/", categoriesControllers.getAllCategory);

// Update - PATCH
router.patch("/:idUser", verifyJWT, categoriesControllers.updateCategory);

// Delete - DELETE
router.delete("/:idUser", verifyJWT, categoriesControllers.deleteCategory);

module.exports = router;
