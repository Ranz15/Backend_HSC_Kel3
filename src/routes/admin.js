// Pemanggilan Library Express
const express = require("express");
const { route } = require("express/lib/application");

// Menggunakan function express untuk route
const router = express.Router();

// Pemanggilan Controller User (untuk logic CRUD)
const adminControllers = require("../controllers/admin");

// Route Section

// Create - POST
router.post("/", adminControllers.createAdmin);

// Read - GET
router.get("/");

// Update - PATCH
router.patch("/:idUser");

// Delete - DELETE
router.delete("/:idUser");

module.exports = router;
