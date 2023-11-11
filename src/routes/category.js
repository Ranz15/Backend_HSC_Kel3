// Pemanggilan Library Express
const express = require("express");
const { route } = require("express/lib/application");

// Menggunakan function express untuk route
const router = express.Router();

// Pemanggilan Controller User (untuk logic CRUD)
const categoriesControllers = require("../controllers/categories");

// Route Section

// Create - POST
router.post("/", categoriesControllers.createCategory);

// Read - GET
router.get("/", categoriesControllers.getAllCategory);

// Update - PATCH
router.patch("/:idUser", categoriesControllers.updateCategory);

// Delete - DELETE
router.delete("/:idUser", categoriesControllers.deleteCategory);

module.exports = router;
